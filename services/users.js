const faker = require('faker');
const boom = require('@hapi/boom');

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
        phoneNumber: faker.phone.phoneNumber(),
        registeredAt: faker.date.past(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ... data
    }
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000);
    });
  }

  async findOne(id) {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    if (user.isBlock) {
      throw boom.conflict('User is block');
    }
    return user;
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ... user,
      ...changes
    };
    return this.user[index];
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index == -1) {
      throw boom.notFound('User not found');
    }
    this.products.splice(index, 1);
    return {id};
  }

}

module.exports = UsersService;
