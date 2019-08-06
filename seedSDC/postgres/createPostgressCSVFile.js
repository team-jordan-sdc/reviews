const csvWriter = require('csv-write-stream');
const fs = require('fs');
const seed = require('../seedHelpers.js');
require('dotenv').config({path: '../../.env'});

async function postgresCsvFileGenerator() {
  var filmObj = {};
  var writer = csvWriter({sendHeaders: true, seperator: '|'});
  writer.pipe(fs.createWriteStream(process.env.POSTGRES_CSV_FILE_NAME));

  for (var i = 1; i <= process.env.POSTGRES_CSV_FILE_ROW_COUNTS; i++) {
    filmObj = seed.generateFilmObject(i);

    filmObj.reviews =
      JSON.stringify(filmObj.reviews.map((item)=>
      '(' + item.id + ','+ item.content + ','+ item.author +','+ item.rating +','+ item.source + ',' + item.createdat + ')'
      )
      ).replace(/\[/g, "{").replace(/\]/g, "}");

    if(!writer.write(
      filmObj
    ))
    {
      await new Promise((resolve)=>writer.once('drain',resolve));
    }
  }
  writer.end();
  console.log('Postgress CSV file created: success');
}

postgresCsvFileGenerator();
