const express = require("express");
const router = express.Router();
const { Cart }  = require("../models/index");

router.post('/:user_id', (req, res) => {
    Cart.findOrCreate({where:{
        User_id: req.params.user_id,
        completed: false
    }})
    .then( ( [cart, created] ) => {
        res.send(cart) //queda pendiente funcionalidad
    })
})



module.exports = Cart;