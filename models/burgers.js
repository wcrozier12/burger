const orm = require('../config/orm');

const burgers = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      console.log('burgers result:' + res)
      cb(res);
    })
  },
  insertOne: function(cb) {
    orm.insertOne('burgers', 'burger_name', colVal1, function(res) {
      cb(res);
    })
  }
}

module.exports = burgers;