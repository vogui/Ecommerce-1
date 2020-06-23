"use strict";
const path = require("path");
var users = require("../routes/users");
var express = require("express");
var router = express.Router();
var passport = require("passport");
// escriban sus rutas acá
router.use("/users", users);

module.exports = router;
