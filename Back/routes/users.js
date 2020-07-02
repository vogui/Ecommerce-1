var express = require("express");
const flash = require("connect-flash");
var router = express.Router();
var path = require("path"); // SDK de Mercado Pago

// Agrega credenciales

const { User } = require("../models/index");
router.use(flash());

// Esto se modifica cuando Henry me diga como se llama el modelo de User
var passport = require("passport");

router.get("/", (req, res, next) => {
  //Aca llegan de /api/users/
  User.findAll().then((users) => {
    var listaUsers = [];
    for (var i = 0; i < users.length; i++) {
      var obj = new Object();
      obj.id = users[i].id;
      obj.adress = users[i].adress;
      obj.email = users[i].email;
      obj.name = users[i].name;
      obj.isAdmin = users[i].isAdmin;
      listaUsers.push(obj);
    }
    res.send(listaUsers);
  });
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
  res.send(obj);
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

router.delete("/:idUser", (req, res, next) => {
  User.findByPk(req.params.idUser).then((user) => {
    user.destroy().then(() => {
      res.send("ok");
    });
  });
});

router.post("/promoteAdmin", (req, res, next) => {
  if ((req.body.secret = "UpgradeToAdmin")) {
    var idUser = req.body.idUser;
    User.update(
      { isAdmin: true },
      {
        where: {
          id: idUser,
        },
      }
    ).then(() => {
      res.send("ok");
    });
  }
});

module.exports = router;
