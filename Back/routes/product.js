const express = require("express");
const router = express.Router();
const path = require("path");
const Product = require("../models/product")

router.get("/", (req, res, next) => {
    Product.findAll()
    .then(productos => res.status(200).send(productos))
    //.catch(()=> res.sendStatus(400))
  });

router.get("/:id", (req,res,next)=>{
    let id = req.params.id
    Product.findByPk(id)
    .then(producto => res.status(200).send(producto.data))
    .catch(()=>{
        res.sendStatus(404)
    })
})

router.post('/',(req,res,next)=>{
    Product.create(req.body)
    .then(()=>{
        res.status(201).send('Su producto a sido creado exitosamente')
    })
})

router.put('/:id',(req,res,next)=>{
    const id = req.params.id
    Product.update(req.body,{
        returnig: true,
        where:{
       id
    }})
    .then((productos)=>{ res.status(204).send(productos[1][0])
    })
    .catch(()=>{
        res.sendStatus(404)
    })
})

router.delete('/:id',(req,res,next)=>{
    const id = req.params.id
  Product.destroy({
      where:{
        id
       }})
.then(()=>{
    res.status(200).send('Tu productos fue eliminado')
})
.catch(()=>{
    res.sendStatus(404)
})  
}) 

  module.exports = router;