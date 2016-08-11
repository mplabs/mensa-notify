'use strict';

module.exports = function(app) {
  const db = app.locals.db.collection('weeks');

  return {
    
    create: function(kw, data, cb) {
      db.insertOne({
        // ...
      }, cb);
    },

    get: function(id, cb) {
      var cursor = db.find({ id: id });
      cursor.next(cb);
    },

    all: function(cb) {
      var cursor = db.find();
      cb(cursor.toArray());
    }
  };
};