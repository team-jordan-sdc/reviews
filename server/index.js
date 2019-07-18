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

app.get('/api/reviews', (req, res) => {
     db.getReviewsforFilm(req.query.filmname)
    .then(results => res.send(results))
    .catch(err => console.log(err))
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

