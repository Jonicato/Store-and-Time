'use strict';

const {UserSchema, USER_TABLE} = require('./../models/userModel')

module.exports = {
  //Aquí se va a hacer la creación
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  //Aquí puedo revertir en caso de que haya un error
  async down (queryInterface) {
    await queryInterface.drop(USER_TABLE);
  }
};
