'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'João Silva',
        senha: 'js123456',
        email: 'joao.silva@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Maria Souza',
        senha: 'ms654321',
        email: 'maria.souza@example.com',
        gm: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Carlos Oliveira',
        senha: 'co987654',
        email: 'carlos.oliveira@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Ana Pereira',
        senha: 'ap456789',
        email: 'ana.pereira@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Pedro Santos',
        senha: 'ps789123',
        email: 'pedro.santos@example.com',
        gm: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Lucia Ferreira',
        senha: 'lf321654',
        email: 'lucia.ferreira@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Marcos Costa',
        senha: 'mc654987',
        email: 'marcos.costa@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Julia Martins',
        senha: 'jm987321',
        email: 'julia.martins@example.com',
        gm: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fernando Alves',
        senha: 'fa123789',
        email: 'fernando.alves@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Patricia Lima',
        senha: 'pl456123',
        email: 'patricia.lima@example.com',
        gm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], { });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
