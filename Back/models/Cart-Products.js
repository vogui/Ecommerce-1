const db = require("../db");
const S = require("sequelize");
const User = require("./User");
const Product = require("./Product");

class Cart_Product extends S.Model {}

Cart_Product.init(
  {
    user_id: {
      type: S.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
   /*  product_id: {
      type: S.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    }, */
    quantity: {
      type: S.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },
  },
  { sequelize: db, modelName: "Cart_Product" }
);

module.exports = Cart_Product;
