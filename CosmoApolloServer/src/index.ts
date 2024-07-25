import { ApolloServer } from '@apollo/server';
import cors from "cors";
import express, { json } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { mergeTypeDefs } from '@graphql-tools/merge';

import resolvers from './graphql/images/resolvers.js';
import imageSchema from "./graphql/images/schema.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

const typeDefs = mergeTypeDefs([ imageSchema ]);

const server = new ApolloServer({
  typeDefs,
  resolvers
});

await server.start();

app.use("/cosmos", cors(), json(), expressMiddleware(server));

// start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server listening at: ${PORT}`);
});
