const express = require("express");
const router = express.Router();
const {Category}  = require("../models/index");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

router.get('/',(req,res,next)=>{
    Category.findAll()
    .then((categorys)=> res.status(200).send(categorys))
})



module.exports = router