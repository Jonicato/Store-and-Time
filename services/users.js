const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for (let index = 0; index <limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        address: faker.address.city(),
        email: faker.internet.email(),
        registeredAt: faker.date.past(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer']
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }

}

module.exports = UsersService;
