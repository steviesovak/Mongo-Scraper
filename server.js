var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// port
var PORT = process.env.PORT || 3000;

var app = express();

// routes
var routes = require("./routes");

// parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// connect Mongo DB
mongoose.connect(MONGODB_URI);

// port listen
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
