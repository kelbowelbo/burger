var connection = require("./connection.js");

var tableName = "burgers";

var orm = {

  selectAll: function(callback) {
    var sql = "SELECT * FROM " + tableName;
    connection.query(sql, function(err, result) {
      callback(result);
    });
  },

  insertOne: function(burger_name, callback) {
    var sql = "INSERT INTO " + tableName + " (burger_name, devoured, date) VALUES (?,?,current_timestamp)";
    connection.query(sql, [
      burger_name, false
    ], function(err, result) {
      callback(result);
    });
  },

  updateOne: function(id, devoured, callback) {
    var sql = "UPDATE " + tableName + " SET devoured=? WHERE id=?";
    connection.query(sql, [
      devoured === "true", id
    ], function(err, result) {
      callback(result);
    });
  }
};

module.exports = orm;
