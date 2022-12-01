require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.PG_DB_USER,
  dbPassword: process.env.PG_DB_PASSWORD,
  dbHost: process.env.PG_DB_HOST,
  dbName: process.env.PG_DB_NAME,
  dbPort: process.env.PG_DB_PORT,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  devEmail: process.env.DEV_EMAIL,
  devPass: process.env.DEV_PASS,
  devMailer: process.env.DEV_MAILER,
};

module.exports = { config };
