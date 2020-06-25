"use strict";
const path = require("path");
const app = require('express')
const router = app.Router();
const users = require("../routes/users");
const product = require('../routes/product')
const passport = require("passport");
const cart = require('./cart');
const category = require('./category')

// escriban sus rutas acá
router.use("/users", users);
router.use("/products", product)
router.use("/cart", cart);
router.use("/category",category)


module.exports = router;
