const express = require("express");
const router = express.Router();
const { Cart, CartProducts, User }  = require("../models/index");

router.post('/', (req, res) => {
    Cart.findOne({ where: {
        UserId: req.body.UserId,
        completed: false
    }})
    .then( cart => {
        if(!cart) {
            Cart.create({
                total: req.body.total,
                adress: req.body.adress,
            })
            .then( createdCart => {
                createdCart.setUser(req.body.UserId)
                CartProducts.create({
                    quantity: req.body.quantity,
                    CartId: createdCart.id,
                    ProductId: req.body.ProductId
                })
                .then(()=> res.sendStatus(200))
            })
        } else {
            cart.total = req.body.total;
            cart.adress = req.body.adress
            cart.save()
            CartProducts.findOne({ where: {
                CartId: cart.id,
                ProductId: req.body.ProductId
            }})
            .then( cartProducts => {
                if(cartProducts) {
                    if(req.body.quantity === 0) {cartProducts.destroy()
                        .then(()=> res.sendStatus(201))}
                    cartProducts.update({
                        quantity: req.body.quantity,
                        CartId: cart.id,
                        ProductId: req.body.ProductId
                    }).then( () => res.sendStatus(200) )
                } else {
                    CartProducts.create({
                        quantity: req.body.quantity,
                        CartId: cart.id,
                        ProductId: req.body.ProductId
                    })
                    .then(()=> res.sendStatus(200))
                }
            })
        }
    })
})

module.exports = router;