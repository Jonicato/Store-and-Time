'use strict';

const {CategorySchema, CATEGORY_TABLE} = require('./../models/categoryModel');
const {ProductSchema, PRODUCT_TABLE} = require('./../models/productModel');

module.exports = {
  //Aquí se va a hacer la creación
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  //Aquí puedo revertir en caso de que haya un error
  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
