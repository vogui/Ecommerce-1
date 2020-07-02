const express = require("express");
const router = express.Router();
const path = require("path");
const { Products, Category } = require("../models/index");
const Sequelize = require("sequelize");
const { info } = require("console");
const Op = Sequelize.Op;

router.post("/", (req, res, next) => {
  console.log("ESTE ES EL BODY", req.body);

  if (req.body.id == 1) {
    //Este ID es para TODAS
    Products.findAll().then((productos) => {
      var productosFiltrados = productos.filter((x) =>
        x.title.toLowerCase().includes(req.body.title.toLowerCase())
      );
      res.status(200).send(productosFiltrados);
    });
  } else {
    Products.findAll().then((productos) => {
      var listaProductos = productos;
      var listaCategorias = [];
      var productosFiltrados = [];
      for (var i = 0; i < listaProductos.length; i++) {
        listaCategorias.push(
          listaProductos[i].getCategories().then((producto) => {
            return producto[0].dataValues.id;
          })
        );
      }

      Promise.all(listaCategorias).then((infoCategorias) => {
        console.log("Lista productos: ", listaProductos);
        console.log("REQ BODY ID", req.body.id);
        console.log("infoCategorias", infoCategorias);
        for (var i = 0; i < listaProductos.length; i++) {
          if (infoCategorias[i] == req.body.id) {
            productosFiltrados.push(listaProductos[i]);
          }
        }
        if (req.body.title == "") {
          res.status(200).send(productosFiltrados);
        } else {
          productosFiltrados = productosFiltrados.filter((x) =>
            x.title.toLowerCase().includes(req.body.title.toLowerCase())
          );
          res.status(200).send(productosFiltrados);
        }
      });
    });
  }

  //.catch(()=> res.sendStatus(400))
});

router.get("/category/:id", (req, res, next) => {
  const id = req.params.id;
  Category.findAll({
    includes: {
      model: Products,
      through: "Product_Category",
      where: {
        id: id,
      },
    },
  }).then((productos) => res.send(productos));
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
