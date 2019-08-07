const pgPool = require('../db/index.js');

function writeFilmRow(filmObj, callback) {

  var text = 'insert into films (name, length, rating, released, studio, language, uhd, hdx, sd, cc, reviews) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';

  var values = [filmObj.name, filmObj.length, filmObj.rating, filmObj.released, filmObj.studio, filmObj.language, filmObj.uhd, filmObj.hdx, filmObj.sd, filmObj.cc, filmObj.reviews.map((item)=> {return '(' + item.id + ','+ item.content + ','+ item.author +','+ item.rating +','+ item.source +','+ item.createdat + ')' } )];

  pgPool.connect((err, client, release) => {
    if (err) {
      console.log(err.stack);
      console.log('could not connect to database');
      callback(err);
    } else {
      client.query(text, values, (err, results) => {
        client.release();
        if (err) {
        console.log(err);
        callback(err);
        }
        callback(err, results.rowCount);
      });
    }
  });
}

function readFilmRow(filmindex, callback) {

  var text = 'select filmindex, name, length, rating, released, studio, language, uhd, hdx, sd, cc, array_to_json(reviews) as "reviews" from films where filmindex=$1 group by filmindex';

  var values = filmindex ? [filmindex] : [1];
  pgPool.connect((err, client, release) => {
    if (err) {
      console.log(err.stack);
      console.log('could not connect to database');
      callback(err);
    } else {
      client.query(text, values, (err, results) => {
        client.release();
        if (err) {
          console.log(err);
          callback(err);
        }
        // mapping properties according to front end
        results.rows[0]['filmname'] = results.rows[0]['name'];
        results.rows[0]['index'] = results.rows[0]['filmindex'];
        let released = JSON.stringify(results.rows[0]['released']).
        replace(/\"/g, "");
        results.rows[0]['released'] = released.split('T')[0];
        for(var i = 0; i < results.rows[0].reviews.length; i++) {
          results.rows[0].reviews[i]['review'] = results.rows[0].reviews[i].content;
        }

        callback(err, results.rows);
      });
    }
  });
}

module.exports = {
  writeFilmRow,
  readFilmRow
};
