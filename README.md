# Scaling 'reviews service' for Videoflix App (old name - Moodu)

### contributors
1. Amol Gajewar

### objectives
Replacing backend for existing revivew service of Videoflix App to handle 10M records and scale it horizontally and vertically to handle 10K RPS.

Videoflix was developed as full-stack web application to display information for a specific TV show or a movie. Reviews service displays a scrollable list of reviews along with additional information such as language, length of the movie, released date, rating, etc.

When developed initially review service was using MongoDB along with express.js in backend. It was designed to handle 100 records only.


### phase 1
### CRUD APIs for existing backend
server/index.js
Implemented and tested CRUD APIs for exsisting backend.

### phase 2
### seedSDC module
seedSDC/seedHelpers
Helper functions to generate seeding data.

seedSDC/mongoDB
Seeding script to generate 10M records as well as to create JSON file. Provides both the options to import data from JSON file or Query based seeding for MongoDB.

seedSDC/postgres
Seeding script to generate 10M records as well as to create CSV file. Provides both the options to import data from CSV / JSON file or Query based seeding for PostgreSQL.

seedSDC/cassandra
Seeding script to generate 10M records as well as to create CSV file. Provides both the options to import data from CSV file or Query based seeding for Cassandra.

### phase 3
Comapred seeding and querying performance for 3 different database technologies and chose the most suitable to scale further.


Performance Matrix

Postgres - 2.5K qps (QBS) | 25K qps (CBS) | 2 to 10 ms (RPLT).
Cassandra - 4K qps (QBS) | 3K qps (CBS) | 0.5 to 2 ms (RPLT).
MongoDB - 2K qps (QBS) | 6K qps (CBS).

QBS -> Query based Seeding for 10M records.
CBS -> CSV file based seeding for 10M records.
RPLT -> Reading performance for last 10% records out of 10M.

### phase 4
server/serverSDC
Implemented MVC and REST APIs for PostgreSQL and load tested GET and POST routes using K6 and New Relic.

### phase 5
Dockerized review service and deployed it on AWS to further scale vertically and horizontally.