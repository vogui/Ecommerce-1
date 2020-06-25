const { Products } = require("./models/index");
const { Category } = require("./models/index");
const { User } = require("./models/index");
 

const product1 = Products.create({
  title: "Ale",
  picture: "https://2.bp.blogspot.com/-Cplhr__WNpI/T4L7JzGya3I/AAAAAAAAATw/x7vcWStsr-o/s1600/RE%2BAle.jpg",
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
  picture: "https://i2.wp.com/cervezalamaria.com/site/wp-content/uploads/2019/03/triguena-1.png?fit=360%2C1144&ssl=1",
  price: 145,
});

const product5 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product6 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product7 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product8 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product9 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product10 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product11 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product12 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product13 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price:135.
});

const product14 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product15= Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product16 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product17 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product18 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product19 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});

const product20 = Products.create({
  title: "Stout",
  picture: "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
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
})
