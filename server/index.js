const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = require('../database/index.js');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  console.log("root")
  res.send(200);
});

// read api
app.get('/api/reviews', (req, res) => {
    db.getReviewsforFilm(req.query.id)
    .then(results => res.send(results))
    .catch(err => {
      res.status(500).send();
      res.end();
      console.log(err);
    })
});

// create api
app.post('/api/reviews', (req, res) => {
  db.saveReviewsforFilm(JSON.parse(JSON.stringify(req.body)))
  .then(results => res.status(201).json(results))
  .then(()=> res.end())
  .catch(err => {
    res.status(500).send();
    res.end();
    console.log(err);
  })
});

// update api
app.put('/api/reviews', (req, res) => {
  const reqObj = JSON.parse(JSON.stringify(req.body));
  console.log(reqObj);
  const updateQuery = reqObj.updateQuery;
  const updateValues = reqObj.updateValues;

  db.updateReviewsforFilm(updateQuery, updateValues)
  .then(results => res.status(201).json(results))
  .catch(err => {
    res.status(500).send();
    res.end();
    console.log(err);
  })
});

// delete api
app.delete('/api/reviews', (req, res) => {
  const reqObj = JSON.parse(JSON.stringify(req.body));
  console.log(reqObj);
  const deleteQuery = reqObj.deleteQuery;

  db.deleteAllReviewsforFilm(deleteQuery)
  .then(results => res.status(200).json(results))
  .catch(err => {
    res.status(500).send();
    res.end();
    console.log(err);
  })
});


app.get('/api/products', (req, res) => {
  db.getProduct()
    .then(results => res.send(results))
    .catch(err => console.log(err))
});

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

