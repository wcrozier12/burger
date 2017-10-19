const orm = require('../config/orm');

const burgers = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    })
  }
}


module.exports = burgers;