const db = require('../db');
const S = require('sequelize');
const Product = require('./Product');
const User = require('./User');

class Review extends S.Model{}

Review.init({
    product_id: {
        type: S.STRING,
        references: {
            model: Product,
            key: 'id'
        }
    },
    user_id: {
        type: S.STRING,
        references: {
            model: User,
            key: 'id'
        }
    },
    review: {
        type: S.TEXT,
        allowNull: false
    },
    stars: {
        type: S.NUMBER,
        validate: {
            max: 5,
            min: 1
        }
    }
}, {sequelize: db, modelName: 'Review'})

Review.hasOne(User);
Review.hasOne(Product);

module.exports = Review;