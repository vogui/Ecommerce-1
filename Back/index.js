var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var routes = require("./routes");
var app = express();
var path = require("path");
var volleyball = require("volleyball");
const path = require('path');
const db = require('./db');

app.use(volleyball);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

db.sync({force: true}).then(() => {
    console.log('DB synched');    
    app.listen(3000, () => console.log('listening on 3000'));
}).catch(console.log)

module.exports = app;
