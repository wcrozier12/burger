const connection = require("./connection.js");

const orm = {
  selectAll: function(tableName, cb) {
    let query = 'SELECT * FROM ??';
    connection.query(query, [tableName], function(err, result) {
      if (err) console.log(err);
      cb(result);
    });
  },
  insertOne: function(tableName, colName1, colVal1, cb){
    let query = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(query, [tableName, colName1, colVal1], function(err, result) {
      if (err) throw err;
      console.log('Affected row: ' + result.affectedRows);
      cb(result);
    });
  },
  updateOne: function(tableName, colName1, colVal1, colName2, colVal2, cb) {
    let query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    connection.query(query, [tableName, colName1, colVal1, colName2, colVal2], function(err,result) {
      if (err) throw err;
      console.log('Affected rows: ' + result.affectedRows);
      cb(result);
    });
  }
};

module.exports = orm;