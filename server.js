var express = require("express");
var app = express();
var server = app.listen(4000);
var cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + "/public"));

console.log("Server is running!");
