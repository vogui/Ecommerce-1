"use strict";
const path = require("path");
const app = require('express')
const router = app.Router();
const users = require("../routes/users");
const product = require('../routes/product')
const passport = require("passport");
const cart = require('./cart');

// escriban sus rutas acá
router.use("/users", users);
router.use("/product", product)
router.use("/cart", cart);


module.exports = router;
