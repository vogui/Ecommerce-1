var express = require("express");
var router = express.Router();
var path = require("path");
const { User } = require("../models/index");
// Esto se modifica cuando Henry me diga como se llama el modelo de User
var passport = require("passport");
router.get("/", (req, res, next) => {
  //Aca llegan de /api/users/
});

router.post("/register", (req, res, next) => {
  console.log('Esto es reqBody', req.body)
  User.create(req.body)
    .then((user) => {
      console.log(user, 'user')
      res.status(201).send(user);
    })
    .catch((err) => {
      console.log(err)
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
  console.log(req.session);
  console.log(req.user);
  console.log(req.authenticate);
  res.render("userHome", { user: req.user });
});

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
