'use strict';

const { OrderProductSchema, ORDER_PRODUCT_TABLE} = require('./../models/orderProductModel')

module.exports = {
  //Aquí se va a hacer la creación
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  //Aquí puedo revertir en caso de que haya un error
  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};
