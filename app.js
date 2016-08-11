'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const config = require('./config.json');

app.use('/', express.static('public'));

MongoClient.connect(config.db.url, (err, db) => {
  if (err) { throw Error(err); }

  app.locals.db = db;

  app.use(require('./controllers')(app));

  app.listen(config.server.port, config.server.host, () => console.log("App is running on port 3000..."));
});