require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.PG_DB_USER,
  dbPassword: process.env.PG_DB_PASSWORD,
  dbHost: process.env.PG_DB_HOST,
  dbName: process.env.PG_DB_NAME,
  dbPort: process.env.PG_DB_PORT
};

module.exports = { config };
