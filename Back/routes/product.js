const express = require("express");
const router = express.Router();
const path = require("path");
const { Products } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.post("/", (req, res, next) => {
  console.log("ESTE ES EL BODY", req.body);
  Products.findAll().then((productos) => {
    var productosFiltrados = productos.filter((x) =>
      x.title.toLowerCase().includes(req.body.title.toLowerCase())
    );
    res.status(200).send(productosFiltrados);
  });
  //.catch(()=> res.sendStatus(400))
});

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Products.findByPk(id)
    .then((producto) => res.status(200).send(producto))
    .catch(() => {
      res.sendStatus(404);
    });
});

router.post("/", (req, res, next) => {
  Products.create(req.body).then(() => {
    res.status(201).send("Su producto a sido creado exitosamente");
  });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  Products.update(req.body, {
    returnig: true,
    where: {
      id,
    },
  })
    .then((productos) => {
      res.status(204).send(productos[1][0]);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Products.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(200).send("Tu productos fue eliminado");
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

router.get("/", (req, res, next) => [
  Products.findAll().then((products) => {
    res.send(products);
  }),
]);

module.exports = router;
