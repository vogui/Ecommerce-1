"use strict";
const path = require("path");
var express = require("express");
var users = require("../routes/users");
var router = express.Router();
var passport = require("passport");
// escriban sus rutas acá
router.get("/users", function (req, res, next) {
  // aca estaria en /api/users
  express.use(users);
});

module.exports = router;
