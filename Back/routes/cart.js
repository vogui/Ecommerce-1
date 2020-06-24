const express = require("express");
const router = express.Router();
const { Cart }  = require("../models/index");

router.post('/', (req, res) => {
    Cart.findOrCreate({where:{
        UserId: req.body.userId,
        completed: false
    }})
    .then( ( [cart, created] ) => {
        res.send(cart) //queda pendiente funcionalidad
    })
})

module.exports = Cart;