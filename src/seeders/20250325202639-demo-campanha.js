'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('campanhas', [
      {
        nome: 'Santa Batalha',
        descricao: 'Uma batalha em busca da redenção religiosa de uma família rica, repleta corrupção e vilania',
        gm_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});


  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('campanhas', null, {});
  }
};
