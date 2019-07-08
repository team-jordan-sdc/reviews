const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../client/dist'));

//app.post('/repos', function (req, res) {

  //github.getReposByUsername(req.body.username, function(githubObject) {
    //         db.save(githubObject);
    //});

    //res.end();

  //});

//app.get('/repos', function (req, res) {

  //db.getPopular(function(repos) {
   // res.json(repos);
  //});
//});

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

