"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define(
    "Flight",
    {
      flightNumber: DataTypes.STRING,
      terminalNumber: DataTypes.STRING,
      checkIn: DataTypes.STRING,
      gate: DataTypes.STRING,
    },
    {}
  );
  Flight.associate = function (models) {
    Flight.hasMany(models.Passenger);
  };
  return Flight;
};
