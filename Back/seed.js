const { Products } = require("./models/index");
const { Category } = require("./models/index");
const { User } = require("./models/index");

const rubia = 'rubia' 

const product1 = Products.create({
  title: "Ale",
  picture: "https://2.bp.blogspot.com/-Cplhr__WNpI/T4L7JzGya3I/AAAAAAAAATw/x7vcWStsr-o/s1600/RE%2BAle.jpg",
  price: 150,
}
)
.then(product =>{
  const productCreated = product 
  Category.findOne({
    where:{
      name:'Rubias'
    }
  })
  
const product2 = Products.create({
  title: "Lager",
  picture: "https://http2.mlstatic.com/cerveza-patagonia-amber-lager-730ml-envios-D_NQ_NP_968479-MLA31907778454_082019-O.webp",
  price: 120,
});

const product3 = Products.create({
  title: "Porter",
  picture: "data:image/jpeg;base64,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",
  price: 170,
});

const product4 = Products.create({
  title: "Trigueña",
  picture: "https://www.dropbox.com/s/63mi0jsjlxgza2y/trigo.jpg?dl=0",
  price: 145,
});

const product5 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product6 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product7 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product8 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product9 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product10 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product11 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product12 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product13 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product14 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product15= Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});
const product16 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product17 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product18 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product19 = Products.create({
  title: "Stout",
  picture: "https://www.dropbox.com/s/eysc28lspbuz2vh/stout.jpg?dl=0",
  price: 135,
});

const product20 = Products.create({
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
