'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('personagens', [
      {
        atributos_id: 1,
        nome: 'Edmundo',
        usuario_id: 11,
        raca_id: 6,
        classe_id: 8,
        campanha_id: 1,
        nivel: null,
        xp: null,
        ca_base: null,
        vida: null,
        capacidade_peso: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('personagens', null, {});
  }
};
