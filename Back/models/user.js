const db = require('../db');
const S = require('sequelize');
const Review = require('./Review');

class User extends S.Model {}

User.init({
    username: {
        type: S.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: S.STRING,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    salt: {
        type: S.STRING
    },
    email: {
        type: S.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: S.STRING,
        allowNull: false,
    },
    adress: {
        type: S.TEXT,
        allowNull: false
    }
}, { sequelize: db, modelName: 'user '})

User.addHook("beforeCreate", (user) => {

    user.salt = crypto.randomBytes(20).toString('hex');
    user.password = user.hashPassword(user.password);

})

User.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

User.prototype.validPassword = function (password) {
    return this.password === this.hashPassword(password);
}
User.hasMany(Review);

module.exports = User;


