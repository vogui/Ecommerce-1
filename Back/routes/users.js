var express = require("express");
const flash = require('connect-flash');
var router = express.Router();
var path = require("path");
const { User, Cart, CartProducts, Products } = require("../models/index");
router.use(flash());

// Esto se modifica cuando Henry me diga como se llama el modelo de User

var passport = require("passport");
router.get("/", (req, res, next) => {
  //Aca llegan de /api/users/
});

router.post("/register", (req, res, next) => {
  console.log("Esto es reqBody", req.body);
  User.create(req.body)
    .then((user) => {
      console.log(user, "user");
      res.status(201).send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(502).send(err);
    });
});

router.get("/login", function (req, res, next) {
  console.log("ESTA AUTENTICADO:", req.isAuthenticated());
  if (req.isAuthenticated()) {
    console.log("Registro y login OK");
    //Definir que hacer si el usuario esta logeado
  } else {
    //Definir que hacer si el usuario no esta logeado
  }
});


router.post("/login", passport.authenticate("local"), function (
  req,
  res,
  next
) {
  var obj = new Object();
  obj.adress = req.user.dataValues.adress;
  obj.email = req.user.dataValues.email;
  obj.id = req.user.dataValues.id;
  obj.name = req.user.dataValues.name;
  obj.isAdmin = req.user.dataValues.isAdmin;
  obj.cart = {
    total: 0,
    products: [],
  }
  Cart.findOne({ where: {
         UserId: obj.id,
         completed: false
  }})
  .then(cart => {
    obj.cart.total = cart.dataValues.total
    CartProducts.findAll({
      where: {
        CartId: cart.id
      }
    })
    .then( cartItems => {
        let promesas = [];
        for(let i = 0; i < cartItems.length; i++ ) {
          promesas.push(
            Products.findOne({ where: {
              id: cartItems[i].dataValues.ProductId
            }})
/*             .then( foundProduct => {
              let product = new Object();
              product.id = cartItems[i].dataValues.ProductId;
              product.quantity = cartItems[i].dataValues.quantity;
              product.title = foundProduct.title;
              product.picture = foundProduct.picture;
              product.price = foundProduct.price;
              obj.cart.products.push(product);
            }) */
          )
          
        }
        console.log('PROMESAS ---->', promesas)
        Promise.all(promesas).then( (pr) => {
          console.log('prrrrr', pr);
          obj.cart.products = pr
          res.send(obj)
        })
      }) //cierra el map
    })
});



// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if(user) res.json(user);
//     if (err) { return next(err); }
//     if (!user) { return res.send({mensaje:"user no existe"})}
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.send({mensaje:"fallo"});
//     });
//   })(req, res, next);
// });


router.post("/toAdmin/:id", (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => {
    if (user.dataValues.isAdmin) {
      User.update({ isAdmin: true }, { where: { id: req.body.id } })
        .then((result) => res.status(201).send(result))
        .catch((err) => res.status(401).send(err));
    }
  });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});




module.exports = router;
