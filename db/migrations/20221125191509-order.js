'use strict';

const { OrderSchema, ORDER_TABLE} = require('./../models/orderModel')

module.exports = {
  //Aquí se va a hacer la creación
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  //Aquí puedo revertir en caso de que haya un error
  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
