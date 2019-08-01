DROP KEYSPACE IF EXISTS moodukeyspace;

CREATE KEYSPACE moodukeyspace WITH
REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE moodukeyspace;

CREATE TYPE moodukeyspace.review (
  id int,
  content text,
  author text,
  rating int,
  source text,
  createdat date
);

CREATE TABLE films (
  filmindex int,
  name text,
  length int,
  rating int,
  released date,
  studio text,
  language text,
  uhd text,
  hdx text,
  sd text,
  cc text,
  reviews list<FROZEN <moodukeyspace.review>>,
  primary key (filmindex)
);
