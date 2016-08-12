function Day(app) {
  const db = app.locals.db.collection('day');

  return {
    create: function(date, meals, cb) {
      db.insertOne({
        date: new Date(date),
        meals: meals
      }, cb);
    },

    get: function(date, cb) {
      db.findOne({ date: new Date(date) }, cb);
    },

    between: function(startDate, endDate, cb) {
      startDate = new Date(startDate);
      endDate = new Date(endDate);
      var cursor = db.find({
        $and: [
          { date: { $gte: startDate } },
          { date: { $lte: endDate } }
        ]
      });
      cursor.toArray(cb);
    },

    all: function(limit, cb) {
      if (typeof limit === 'function') {
        cb = limit;
        limit = 0;
      }

      db.find().limit(limit).toArray(cb);
    }
  }
}

module.exports = Day;