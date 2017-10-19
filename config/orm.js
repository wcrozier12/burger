const connection = require("./connection.js");

const orm = {
  selectAll: function(tableName) {
    let query = 'SELECT * FROM ??';
    connection.query(query, [tableName], function(err, result) {
      if (err) console.log(err);
      console.log(result);
    });
  },
  insertOne: function(tableName, colName1, colVal1){
    let query = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(query, [tableName, colName1, colVal1], function(err, result) {
      console.log(result.affectedRows);
    });
  },
  updateOne: function(tableName, colVal1, val1, colVal2, val2) {
    let query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    connection.query(query, [tableName, colVal1, val1, colVal2, val2], function(err,result) {
      console.log(result.affectedRows);
    });
  }
};

module.exports = orm;