var express = require("express");
var app = express();
var server = app.listen(4000);
var cors = require("cors");
const whitelist = ["https://ricotrebeljahr.de/coding", "http://localhost:3000"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.static(__dirname + "/public"));

console.log("Server is running!");
