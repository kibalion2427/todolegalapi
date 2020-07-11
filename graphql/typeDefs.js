const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Flight {
    id: Int!
    flightNumber: String!
    terminalNumber: String
    checkIn: String
    gate: String
    passengers: [Passenger!]!
  }

  type Passenger {
    id: Int!
    passengerName: String!
    passengerPassport: String!
    passengerFlight: Flight!
  }

  type Query {
    getFlight(id: Int!): Flight
    getAllFlights: [Flight!]!
    getPassenger(id: Int!): Passenger
    getAllPassengers: [Passenger!]!
    countPassengers: Int!
  }
`;

module.exports = typeDefs;
