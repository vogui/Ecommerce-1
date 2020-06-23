"use strict";
const path = require("path");
const users = require("../routes/users");
const product = require('../routes/product')
const router = express.Router();
const passport = require("passport");
// escriban sus rutas acá
router.use("/users", users);
router.use("/product",product)

module.exports = router;
