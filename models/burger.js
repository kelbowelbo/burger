var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
    	orm.selectAll(function(data) {
    		console.log(data);
    		callback(data);
  		});
    },

	insertOne: function(burger_name, callback) {
    	orm.insertOne(burger_name, function(data) {
    		console.log(data);
    		callback(data);
    	});
	},

	updateOne: function(id, devoured, callback) {
		orm.updateOne(id, devoured, function(data) {
    		console.log(data);
    		callback(data);
		});
	}
};
module.exports = burger;