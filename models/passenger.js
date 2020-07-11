"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Passenger = sequelize.define(
    "Passenger",
    {
      passengerName: DataTypes.STRING,
      passengerPassport: DataTypes.STRING,
    },
    {}
  );
  Passenger.associate = function (models) {
    // Passenger.belongsTo(models.Flight, {
    //   foreignKey: "flightId",
    // });
    Passenger.belongsTo(models.Flight);
  };
  return Passenger;
};
