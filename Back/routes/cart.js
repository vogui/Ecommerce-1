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
                total: itemValue,
                adress: req.body.adress,
            })
            .then( createdCart => {
                createdCart.setUser(req.body.UserId)
                CartProducts.create({
                    quantity: req.body.quantity,
                    CartId: createdCart.id,
                    ProductId: req.body.productId
                })
                .then(()=> res.sendStatus(200))
            })
        } else {
            cart.total += itemValue;
            cart.adress = req.body.adress
            cart.save()
            CartProducts.findOne({ where: {
                CartId: cart.id,
                ProductId: req.body.productId
            }})
            .then( cartProducts => {
                if(cartProducts) {
                    cartProducts.update({
                        quantity: req.body.quantity,
                        CartId: cart.id,
                        ProductId: req.body.productId
                    }).then( () => res.sendStatus(200) )
                } else {
                    CartProducts.create({
                        quantity: req.body.quantity,
                        CartId: cart.id,
                        ProductId: req.body.productId
                    })
                    .then(()=> res.sendStatus(200))
                }
            })
        }
    })
});

router.get('/', (req, res) => {
    Cart.findOne({ where: {
        UserId: req.body.UserId,
        completed: false
    }})
    .then( cart => {
        res.status(200).send(cart)
    })
});

/* ProductId
Picture
Price
quantity
title
total */

module.exports = router;