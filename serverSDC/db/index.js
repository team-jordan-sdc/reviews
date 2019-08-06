require('dotenv').config({path: '../.env'});
const pg = require('pg');

const pgConfig = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  host: process.env.POSTGRES_LOCAL_HOST,
  max: process.env.POSTGRES_MAX_CLIENT,
  connectionTimeoutMillis: process.env.POSTGRES_CONNECTION_TIMEOUT,
  idleTimeoutMillis: process.env.POSGRES_IDLE_TIMEOUT
};

const pgPool = new pg.Pool(pgConfig);

module.exports = pgPool;
