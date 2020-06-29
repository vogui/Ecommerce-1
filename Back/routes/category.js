const express = require("express");
const router = express.Router();
const { Category } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res, next) => {
  Category.findAll().then((categorys) => {
    var sinRepeticion = [];
    for (var i = 0; i < categorys.length; i++) {
      if (!sinRepeticion.includes(categorys[i].name)) {
        sinRepeticion.push(categorys[i]);
      }
    }
    res.status(200).send(sinRepeticion);
  });
});

module.exports = router;
