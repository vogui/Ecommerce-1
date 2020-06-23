const db = require("../db");
const S = require("sequelize");
const User = require("./user");

class Cart extends S.Model {}

Cart.init(
  {
    /*  user_id: {
      type: S.STRING,
      references: {
        model: User,
        key: "id",
      },
    }, */
    total: {
      type: S.INTEGER,
    },
    adress: {
      type: S.TEXT,
    },
  },
  { sequelize: db, modelName: "Cart" }
);

//Cart.hasOne(User);

module.exports = Cart;
