'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('atributos', [
      {
        for: 10,
        des: 12,
        con: 17,
        int: 11,
        sab: 14,
        car: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atributos', null, {});
  }
};
