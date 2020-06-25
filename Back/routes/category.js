const express = require("express");
const router = express.Router();
const path = require("path");
const {Category, Products}  = require("../models/index");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

router.get('/',(req,res,next)=>{
    Category.findAll()
    .then((categorys)=> res.status(200).send(categorys))
})

router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    Products.findAll({
        where:{
            CategoryId:id
        }
    })
    .then((product)=> res.status(200).send(product))
})


module.exports = router