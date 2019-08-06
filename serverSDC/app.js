require('newrelic');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/index.js');
require('dotenv').config({path: '../../.env'});

const app = express();
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname + '/../client/dist')));

const port = process.env.REVIEW_SERVICE_PORT;

app.listen(port, function() {
  console.log(`review service listening on port ${port}`);
});