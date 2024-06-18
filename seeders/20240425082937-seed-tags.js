'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [
      { nombre: 'Android', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Electrónica', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Resistencia', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
