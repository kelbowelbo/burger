var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

  // GET route for getting all of the todos
router.get("/", function(req, res) {
	burger.selectAll(function(results) {
		res.render("index", { burgers: results });
    });
});
router.post("/api/new", function(req, res) {
	console.log(req.body);
	burger.insertOne(req.body.burger_name, function(results) {
		res.redirect("/");
    });
});
router.put("/api/devour/:id", function(req, res) {
	burger.updateOne(req.params.id, req.body.devoured, function(results) {
		res.render("index", { burgers: results });
    });
});

module.exports = router;