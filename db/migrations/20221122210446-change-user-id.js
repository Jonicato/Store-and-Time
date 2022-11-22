'use strict';
const { DataTypes } = require('sequelize');

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customerModel')

module.exports = {
  //Aquí se va a hacer la creación
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  //Aquí puedo revertir en caso de que haya un error
  async down(queryInterface) {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
