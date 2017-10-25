const orm = require('../config/orm');

const burgers = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    })
  },
  insertOne: function(colVal1, cb) {
    orm.insertOne('burgers', 'burger_name', colVal1, function(res) {
      cb(res);
    })
  },
  updateOne: function(colVal1, colVal2, cb) {
    orm.updateOne('burgers', 'devoured', colVal1, 'id', colVal2, function(res) {
      cb(res);
    })
  }
};

module.exports = burgers;