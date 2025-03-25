'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      atributos_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'atributos', key: 'id' }
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' }
      },
      raca_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'racas', key: 'id' }
      },
      classe_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'classes', key: 'id' }
      },
      campanha_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'campanhas', key: 'id' }
      },
      nivel: {
        type: Sequelize.INTEGER
      },
      xp: {
        type: Sequelize.INTEGER 
      },
      ca_base: {
        type: Sequelize.INTEGER
      },
      vida: {
        type: Sequelize.INTEGER
      },
      capacidade_peso: {
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
    await queryInterface.dropTable('personagens');
  }
};