const csvWriter = require('csv-write-stream');
const fs = require('fs');
const seed = require('../seedHelpers.js');
require('dotenv').config({path: '../../.env'});

var filmWriter = csvWriter({sendHeaders: true, seperator: '|'});
var reviewWriter = csvWriter({sendHeaders: true, seperator: '|'});

const csvFileGenerator = () => {

  filmWriter.pipe(fs.createWriteStream(
    process.env.CASSANDRA_CSV_FILE_FOR_FILMS));

  for (var i = 1; i <= process.env.CASSANDRA_CSV_FILE_ROW_COUNTS; i++) {

    var filmObj = seed.generateFilmObject(i);
    filmObj.reviews = []; // setting film reviews empty
    filmWriter.write(
      filmObj
    );
  }
  filmWriter.end();

  reviewWriter.pipe(fs.createWriteStream(process.env.CASSANDRA_CSV_FILE_FOR_REVIEWS));

  for (var i = 1; i <= process.env.CASSANDRA_CSV_FILE_ROW_COUNTS  ; i++) {

    reviewWriter.write(
      {
        filmindex: i,
        reviews: JSON.stringify(seed.generateReviews(i)).replace(/\"/g, "'")
      }
    );
  }
  reviewWriter.end();

  console.log('Cassandra CSV file created: success');
}

csvFileGenerator();
