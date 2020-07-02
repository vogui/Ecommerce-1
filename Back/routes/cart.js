const express = require("express");
const router = express.Router();
const { Cart, CartProducts, User, Products }  = require("../models/index");
const { sequelize } = require("../models/User");

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
});

router.put('/', (req, res) => {
    Cart.findOne({ where: {
        UserId: req.body.UserId,
        completed: false
    }})
    .then( cart => {
        cart.completed = true;
        cart.save()
        return cart
    })
    .then( boughtCart => res.sendStatus(200))
})

router.get('/', (req, res) => {
    let pastOrders = new Array;
    Cart.findAll({ where: {
        UserId: req.body.UserId,
        completed: true
    }})
    .then( userCarts => {
        let carts = new Array;
        for( let i = 0; i < userCarts.length; i++) {
            let p = {
                id: userCarts[i].id,
                total: userCarts[i].total,
                date: userCarts[i].updatedAt,
                Products: [],
            }
            pastOrders.push(p);
            carts.push(
                CartProducts.findAll({ where: {
                    CartId: userCarts[i].id
                }})
            )
        }
        Promise.all(carts)
        .then( rta => {
            let productos = new Array;
            let qPedidos = new Array;
            let quantities =new Array;
            rta.map( prod => {
                prod.map( item => {
                    quantities.push(item.quantity)
                })
            })
            for(let j = 0; j < rta.length; j++) {
                qPedidos.push(rta[j].length);
                for(let h = 0; h < rta[j].length; h++) {
                    productos.push(
                        Products.findByPk(rta[j][h].ProductId)
                    )
                }
            }
            Promise.all(productos)
            .then( productList => {
                let count = 0;
                for(let q = 0; q < qPedidos.length; q++) {
                    for(let t = 0; t < qPedidos[q]; t++) {
                        let psh = {
                            id: productList[count].id,
                            title: productList[count].title,
                            price: productList[count].price,
                            quantity: quantities[count]
                        }
                        pastOrders[q].Products.push(psh)
                        count++;
                    }
                } 
                res.send(pastOrders)
            })
        })
    })
})

router.put('/', (req, res) => {
    Cart.findOne({ where: {
        UserId: req.body.user,
        completed: false
    }})
    .then( cart => {
        cart.completed = true;
        cart.save()
        return cart
    })
    .then( boughtCart => res.sendStatus(200))
})

module.exports = router;