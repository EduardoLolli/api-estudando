'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atributos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      for: {
        type: Sequelize.INTEGER
      },
      des: {
        type: Sequelize.INTEGER
      },
      con: {
        type: Sequelize.INTEGER
      },
      int: {
        type: Sequelize.INTEGER
      },
      sab: {
        type: Sequelize.INTEGER
      },
      car: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('atributos');
  }
};