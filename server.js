var express = require("express");
var app = express();
var server = app.listen(4000);

var cors = require("cors");
var helmet = require("helmet");
const frameguard = require("frameguard");

app.use(
  frameguard({
    action: "allow-from",
    domain: "https://ricotrebeljahr.de"
  })
);
function removeFrameguard(req, res, next) {
  res.removeHeader("X-Frame-Options");
  next();
}

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use("*", removeFrameguard, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

console.log("Server is running!");
