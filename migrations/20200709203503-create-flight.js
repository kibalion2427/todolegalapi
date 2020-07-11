"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        type: Sequelize.STRING,
      },
      terminalNumber: {
        type: Sequelize.STRING,
      },
      checkIn: {
        type: Sequelize.STRING,
      },
      gate: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Flights");
  },
};
