const faker = require('faker');
const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class ProductsService {

  constructor() {
    /* this.products = [];
    this.generate(); */
  }

  /* generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  } */

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if ( limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if( price ) {
      options.where.price = price
    }

    const { min_price, max_price } = query;
    if( min_price && max_price ) {
      options.where.price = {
        [Op.gte]: min_price,
        [Op.lte]: max_price,
      }
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }

}

module.exports = ProductsService;
