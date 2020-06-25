const { Products } = require("./models/index");
const { Category } = require("./models/index");
const { User } = require("./models/index");

const product1 = Products.create({
  title: "Ale",
  picture: "https://www.linguavox.es/es/wp-content/uploads/birra.png",
  price: 150,
});

const product2 = Products.create({
  title: "Lager",
  picture:
    "https://img2.pngio.com/pilsners-and-pale-lagers-pilsners-and-pale-lagers-are-light-to-pale-lager-png-400_400.png",
  price: 120,
});

const product3 = Products.create({
  title: "Porter",
  picture:
    "https://www.cervezaback.com/wp-content/uploads/2018/08/BACK-BROWN-PORTER.png",
  price: 170,
});

const product4 = Products.create({
  title: "Trigueña",
  picture:
    "https://i2.wp.com/cervezalamaria.com/site/wp-content/uploads/2019/03/triguena-1.png?fit=360%2C1144&ssl=1",
  price: 145,
});

const product6 = Products.create({
  title: "Stout",
  picture:
    "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const category1 = Category.create({
  name: "Rubias",
});

const category2 = Category.create({
  name: "Negras",
});

const category3 = Category.create({
  name: "Coloradas",
});

const user1 = User.create({
  email: "borrachin@gmail.com",
  password: "123",
  name: "Sr. Borracho",
  adress: "Av. Siempreviva 123",
});
