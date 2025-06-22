const express = require('express');
const Resena = require('../models/Resena');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const resena = new Resena(req.body); // Crear un nuevo resena con los datos del body
    await resena.save(); // Guardar el resena en la base de datos
    res.status(201).send(resena); // Responder con el resena creado
  } catch (err) {
    res.status(400).send({ error: err.message }); // Manejar errores de validación o duplicados
  }
});
module.exports=router;