var express = require("express");
var app = express();
var server = app.listen(4000);

var cors = require("cors");
const frameguard = require("frameguard");

app.use(
  frameguard({
    action: "allow-from",
    domain: "https://ricotrebeljahr.de"
  })
);

app.use(cors());
app.use(express.static(__dirname + "/public"));

console.log("Server is running!");
