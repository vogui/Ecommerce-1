"use strict";
const path = require("path");
var users = require("../routes/users");
var app = require('express')
var router = app.Router();
var passport = require("passport");
// escriban sus rutas acá
router.use("/users", users);



module.exports = router;
