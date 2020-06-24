const { Products } = require("./models/index");
const { Category } = require("./models/index");
const { User } = require("./models/index");

const product1 = Products.create({
  title: "Ale",
  picture: "https://www.dropbox.com/s/7hccmxdhaybw1bi/ale.jpg?dl=0",
  price: 150,
});

const product2 = Products.create({
  title: "Lager",
  picture: "https://www.dropbox.com/s/a7pz619hal9ik87/lager.jpg?dl=0",
  price: 120,
});

const product3 = Products.create({
  title: "Porter",
  picture: "https://www.dropbox.com/s/geh2g6a88thx52f/porter.jpg?dl=0",
  price: 170,
});

const product4 = Products.create({
  title: "Trigueña",
  picture: "https://www.dropbox.com/s/63mi0jsjlxgza2y/trigo.jpg?dl=0",
  price: 145,
});

const product6 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
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
