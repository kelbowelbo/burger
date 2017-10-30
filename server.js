// Dependencies
var express = require("express");
var methodOverride = require("method-override")
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller.js") 
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.disable("etag");
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.listen(PORT);