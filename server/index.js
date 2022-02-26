import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers/index.js";
import typeDefs from "./graphql/typeDefs.js";
import mongoose from 'mongoose';
import { MONGODB } from "./config.js";

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => res }); // result in context for debug purpose

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen();
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  })