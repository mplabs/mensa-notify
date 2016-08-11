'use strict';

const express = require('express');
const router = express.Router();

module.exports = function(app) {

  router.use('/weeks', require('./week')(app));

  return router;
}
