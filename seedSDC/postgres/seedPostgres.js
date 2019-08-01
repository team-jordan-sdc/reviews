const { Client } = require('pg');
const promise = require('bluebird');
const seed = require('../seedHelpers.js');
require('dotenv').config({path: '../../.env'});


const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_LOCAL_HOST,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  port: process.env.POSTGRES_PORT
});

const db = pgp(client); // database instance;
var globalFilmIndex = 1; //record index set to 1 initially

function insertRecords(batchSize) {

  return db.tx(function (ctx) {

      var queries = [];

      var text = 'insert into films (filmindex, cc, name, hdx, language, length, rating, released, reviews, sd, studio, uhd) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

      for (var i = 1; i <= batchSize; i++) {

        var filmObj = seed.generateFilmObject(i);

        var values = [globalFilmIndex++, filmObj.cc, filmObj.name, filmObj.hdx, filmObj.language, filmObj.length, filmObj.rating, filmObj.released,

        JSON.stringify(filmObj.reviews.map((item)=>
         '(' + item.id + ','+ item.content + ','+ item.author +','+ item.rating +','+ item.source + ',' + item.createdat + ')'
         )
        ).replace(/\[/g, "{").replace(/\]/g, "}"),

        filmObj.sd, filmObj.studio, filmObj.uhd];

        queries.push(ctx.none(text,values));
      }
      return promise.all(queries);
  });
}

function insertMany(batchCounter) {
  if (!batchCounter) {
    batchCounter = 1;
  }
  return insertRecords(process.env.POSTGRES_SEED_BATCH_SIZE) //10000
      .then(function () {
          if (batchCounter >= process.env.POSTGRES_SEED_BATCH_COUNT) { //10
              return promise.resolve('SUCCESS');
          } else {
              return insertMany(++batchCounter);
          }
      }, function (reason) {
          return promise.reject(reason);
      });
}

insertMany()
  .then(function (data) {
      console.log(data);
  }, function (reason) {
      console.log(reason);
  })
  .done(function () {
      console.log('pg promise end')
      pgp.end();
  });
