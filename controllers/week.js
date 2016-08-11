'use strict';

const express = require('express');
const router = express.Router();

module.exports = function(app) {

  const Week = require('../models/week')(app);

  router.get('/:kw', (req, res) => {
    res.send('Hello, world!');
  });

  return router;
};