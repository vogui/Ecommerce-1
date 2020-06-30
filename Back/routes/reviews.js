const express = require("express");
const router = express.Router();

router.get("/:idProducto", (req, res, next) => {
  //Aca obtengo todas las reviews;
  //Se las envio al usuario;
});

router.post("/:idProducto", (req, res, next) => {
  /*
{idUser: 4, mensaje: "Muy buena birra", estrellas:3}
    */
  //Setear las estrellas
  //Setear el texto
});

module.exports = router;
