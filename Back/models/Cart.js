const db = require("../db");
const S = require("sequelize");
const User = require("./User");

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
    completed: {
      type: S.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize: db, modelName: "Cart" }
);

//Cart.hasOne(User);

module.exports = Cart;
