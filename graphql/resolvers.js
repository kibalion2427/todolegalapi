const resolvers = {
  Query: {
    async getFlight(root, { id }, { models }) {
      return models.Flight.findByPk(id);
    },
    async getAllFlights(root, args, { models }) {
      return models.Flight.findAll();
    },
    async getPassenger(root, { id }, { models }) {
      return models.Passenger.findByPk(id);
    },
    async getAllPassengers(root, args, { models }) {
      return models.Passenger.findAll();
    },
    async countPassengers(root, args, { models }) {
      return models.Passenger.findAndCountAll().then((result) => {
        console.log("RESULTADO", result);
        return result.count;
      });
    },
  },
  Flight: {
    async passengers(passenger) {
      return passenger.getPassengers(); //Esta función genera el ORM basado en la relación hasMany definida en el modelo
    },
  },
  Passenger: {
    async passengerFlight(flight) {
      return flight.getFlight(); ////Esta función genera el ORM basado en la relación belongsTo definida en el modelo
    },
  },
};

module.exports = resolvers;
