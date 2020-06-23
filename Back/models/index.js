const Cart = require('./Cart')
const CartProducts = require('./Cart-Products')
const Category = require('./Category')
const Products = require('./Product')
const Review = require('./Review')
const User = require('./User')

//Cart.belongsTo(User) // Cart{ UserId = id(User)}  

//Review.belongsTo(User) 

//User.hasMany(Review)

//Category.hasMany(Products)

//Products.hasMany(Category)

//Products.belongsTo(CartProducts)

module.exports={Cart, CartProducts, Category, Products, Review, User}

