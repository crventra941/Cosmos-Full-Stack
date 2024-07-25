import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);

  console.log(`\n\nYou must set the MONGODB environment variable in the .env file`);
}

let db = conn.db("cosmo_db");

export default db;