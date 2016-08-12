'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const config = require('./config.json');

// Setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static routing
app.use('/', express.static('public'));

MongoClient.connect(config.db.url, (err, db) => {
  if (err) { throw Error(err); }

  app.locals.db = db;

  app.use(require('./controllers')(app));

  app.listen(config.server.port, config.server.host, () => {
    console.log("App is running on port 3000...");
  });
});