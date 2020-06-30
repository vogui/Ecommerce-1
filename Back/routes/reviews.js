const express = require("express");
const { Review } = require("../models/index");
const router = express.Router();

router.get("/:idProducto", (req, res, next) => {
  const id = req.params.idProducto
  Review.findAll({
    where:{
      ProductId: id
    }
  })
  .then((ProductReviews)=>{
    console.log('Estas son las review del Producto', ProductReviews)
   res.status(200).send(ProductReviews)
  })

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
