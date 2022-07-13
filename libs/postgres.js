require('dotenv').config();
const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: process.env.PG_DB_HOST,
    port: process.env.PG_DB_PORT,
    user: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_NAME
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
