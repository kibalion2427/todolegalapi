"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Passenger", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FlightId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Flight",
          key: "id",
        },
      },
      passengerName: {
        type: Sequelize.STRING,
      },
      passengerpassport: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Passenger");
  },
};
