const express = require('express');
const router = express.Router();

function DaysController (app) {
  const Day = require('../models/day')(app);

  router.get('/', (req, res) => {
    var limit = +req.query.limit || 0;
    Day.all(limit, (err, docs) => {
      if (!err) res.send(docs);
      else res.status(500).send(err);
    });
  });

  router.get('/between', (req, res) => {
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    Day.between(startDate, endDate, (err, docs) => {
      if (!err) res.send(docs);
      else res.status(500).send(err);
    });
  });

  router.get('/:date', (req, res) => {
    var date = req.params.date;
    Day.get(date, (err, doc) => {
      if (!err) { res.send(doc); }
      else res.status(500).send(err);
    });
  });

  router.post('/', (req, res) => {
    var data = req.body;
    if (!data.date || !data.meals) {
      throw TypeError("Invalid data");
    }

    Day.create(data.date, data.meals, (err, doc) => {
      if (!err) { res.sendStatus(202); }
      else res.status(500).send(err);
    });

  });

  return router;
};

module.exports = DaysController;