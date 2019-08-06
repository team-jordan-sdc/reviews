const models = require('../models/index.js');

function getOneFilmRow(req, res) {
  models.readFilmRow(req.query.id, function(err, results) {
    if(err) {
      console.log(err);
      res.status(500).send();
      res.end();
    } else {
      res.send(results);
    }
  });
}

function postOneFilmRow(req, res) {
  models.writeFilmRow(JSON.parse(JSON.stringify(req.body)), function(err, results) {
    if(err) {
      console.log(err);
      res.status(500).send();
      res.end();
    } else {
      res.status(201).json(results);
    }
  });
}


module.exports = {
  getOneFilmRow,
  postOneFilmRow
};