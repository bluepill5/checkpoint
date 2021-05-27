require('dotenv').config();

const defaultConfig = {
  username: process.env.DB_USER, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
};

module.exports = {
  development: defaultConfig,
  production: Object.assign(defaultConfig, {
    /** You can override the default config here */
  }),
};
