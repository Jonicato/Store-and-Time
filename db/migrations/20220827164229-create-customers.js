'use strict';

const { CustomerSchema, CUSTOMER_TABLE} = require('./../models/customerModel')

module.exports = {
  //Aquí se va a hacer la creación
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  //Aquí puedo revertir en caso de que haya un error
  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
