DROP DATABASE IF EXISTS moodu;

CREATE DATABASE moodu;

\c moodu;

CREATE TYPE review AS (
  id int,
  content text,
  author text,
  rating int,
  source text,
  createdat date
);

CREATE TABLE films (
  filmindex serial PRIMARY KEY,
  cc text,
  hdx text,
  language text,
  length int,
  name text,
  rating int,
  released date,
  reviews review[],
  sd text,
  studio text,
  uhd text
);

-- run following command before seeding
-- psql postgres -f postgresSchema.sql
