const { Products } = require("./models/index");
const { Category } = require("./models/index");
const { User } = require("./models/index");

const product1 = Products.create({
  title: "Ale",
  picture:
    "https://2.bp.blogspot.com/-Cplhr__WNpI/T4L7JzGya3I/AAAAAAAAATw/x7vcWStsr-o/s1600/RE%2BAle.jpg",
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
    "https://cdn.shopify.com/s/files/1/1103/5152/products/trigo-01_1024x1024.png?v=1580826501",
  price: 145,
});

const product5 = Products.create({
  title: "Stout",
  picture:
    "https://e7.pngegg.com/pngimages/744/277/png-clipart-beer-cocktail-pilsner-beer-glasses-stout-beer-glass-beer.png",
  price: 135,
});
const product6 = Products.create({
  title: "Belga",
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLVIQY35P8lG-iAOPrUJcl-uxB6Y8THrZU4g&usqp=CAU",
  price: 200,
});
const product7 = Products.create({
  title: "Pilsner",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Pilsner_urquell_mug.jpg",
  price: 135,
});

const product8 = Products.create({
  title: "Lager oscura",
  picture:
    "https://www.cocinista.es/download/bancorecursos/recetas/receta-cerveza-grano-lager-oscura.jpg",
  price: 125,
});
const product9 = Products.create({
  title: "India Pale Ale ",
  picture:
    "https://www.cerveceroexperto.com/wp-content/uploads/2019/07/IPA-Pinta.jpg",
  price: 170,
});

const product10 = Products.create({
  title: "Trigo",
  picture: "https://lupulu.com/wp-content/uploads/2014/05/lupulu-trigo.jpg",
  price: 135,
});

const product11 = Products.create({
  title: "Barley Wine",
  picture:
    "https://cervecerosdemexico.com/wp-content/uploads/2017/12/Barleywine.jpg",
  price: 135,
});

const product12 = Products.create({
  title: "Bitter",
  picture:
    "https://i.pinimg.com/736x/a6/af/dd/a6afddb6a0cf03326f5e2626f4cb6916.jpg",
  price: 160,
});
const product13 = Products.create({
  title: "Brown Ale",
  picture:
    "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800/https://www.cerveza-artesanal.co/wp-content/uploads/2017/09/receta-brown-ale-800x600.jpg",
  price: 180,
});

const product14 = Products.create({
  title: "Old Ale",
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR5NsDeC9pI0xhSj3itWlmXFByyiokcTwtaA&usqp=CAU",
  price: 180,
});
const product15 = Products.create({
  title: "Altbier",
  picture:
    "https://d26lpennugtm8s.cloudfront.net/stores/852/895/products/altbier-21-4be93e1494c96d7c8d15686489487938-1024-1024.jpg",
  price: 135,
});
const product16 = Products.create({
  title: "Kölsch",
  picture:
    "https://s3-us-west-2.amazonaws.com/homebrewassoc/wp-content/uploads/2016/04/kolshSLIDE.jpg",
  price: 135,
});

const product17 = Products.create({
  title: "Berliner weisse",
  picture:
    "https://cocktail-glaeser.de/wp-content/uploads/RITZENHOFF-2er-Set-Berliner-Weisse-Pokal-Glaeser-von-RASTAL-0-3-Liter-mit-Logo.jpg",
  price: 250,
});

const product18 = Products.create({
  title: "Lambic",
  picture:
    "https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-Fruit-Lambic.jpg",
  price: 300,
});

const product19 = Products.create({
  title: "Rauchbier",
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMX8oFu47qzDqw_Xm97rxZ-AUwqTVFBGoKw&usqp=CAU",
  price: 300,
});

const product20 = Products.create({
  title: "Steam beer",
  picture:
    "https://i.pinimg.com/originals/e1/4b/b1/e14bb19fdbcc700d751ff3fd92bf1fe6.jpg",
  price: 300,
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
