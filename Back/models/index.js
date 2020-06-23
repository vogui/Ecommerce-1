//const sequelize = require('sequelize')
const Cart = require('./Cart')
const CartProducts = require('./Cart-Products')
const Category = require('./Category')
const Products = require('./Product')
const Review = require('./Review')
const User = require('./User')
const Product = require('./Product')

//Cart.belongsTo(User) // Cart{ UserId = id(User)}  

//Review.belongsTo(User) 

//User.hasMany(Review)

//Category.hasMany(Products)

//Products.hasMany(Category)

//Products.belongsTo(CartProducts)

Product.hasMany(Review);
Review.belongsTo(Product);

Review.belongsTo(User);
User.hasMany(Review);

Product.belongsToMany(Category, {through: 'Product_Categories'});

Cart.belongsTo(Product);
Product.hasMany(Cart);

Cart.belongsTo(User);
User.hasMany(Cart);

module.exports={Cart, CartProducts, Category, Products, Review, User}

