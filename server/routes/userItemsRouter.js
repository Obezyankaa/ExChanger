const express = require('express');
const {
  Product, ProductPhoto, Category, View,
} = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  const userItems = await Product.findAll({ include: [{ model: ProductPhoto, attributes: ['photo'] }, { model: Category, attributes: ['name'] }] });
  res.json(userItems);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const deleteItem = await Product.destroy({ where: { id } });
  res.json(200);
});

module.exports = router;
