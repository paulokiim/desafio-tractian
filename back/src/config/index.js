require('dotenv').config();

module.exports = {
  DATABASE: {
    DB_NAME: process.env.DB_NAME,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
  },
  PORT: process.env.PORT,
}