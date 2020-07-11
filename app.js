const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const models = require("./models");

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//REST API ROUTES

app.use(require("./rest/routes/barcode"));

//EMBEED APOLLO SERVER
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

server.applyMiddleware({ app });

//SYNC DATABASE

models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port: 3000 }, () =>
  console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
);
