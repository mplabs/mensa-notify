'use strict';

const express = require('express');
const router = express.Router();

module.exports = function(app) {

  router.use('/days', require('./days')(app));

  return router;
}
