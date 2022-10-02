const express = require('express');
const {
  Product, User, View, ProductPhoto, Category,
} = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      name, category_id, description, status, price, user_id, location, timing,
    } = req.body;
    const newProduct = await Product.create({
      name,
      category_id,
      description,
      status,
      price,
      user_id,
      location,
      timing,
    });
    const createdProd = await Product.findOne({
      where: { id: newProduct.id },
      raw: true,
      include: [
        { raw: true, model: User },
        { raw: true, model: Category },
        { raw: true, model: View },
        { raw: true, model: ProductPhoto }],
    });
    res.json(createdProd);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    const AllProds = await Product.findAll({
      raw: true,
      include: [
        { raw: true, model: User },
        { raw: true, model: Category },
        { raw: true, model: View },
        { raw: true, model: ProductPhoto }],
    });
    res.json(AllProds);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { changedProduct } = req.body;

    await Product.update({ where: { id: req.params.id } }, changedProduct);
    // updatedProduct.name = changedProduct.name;
    // updatedProduct.category_id = changedProduct.category_id;
    // updatedProduct.description = changedProduct.description;
    // updatedProduct.status = changedProduct.status;
    // updatedProduct.price = changedProduct.price;
    // updatedProduct.user_id = changedProduct.user_id;
    // updatedProduct.location = changedProduct.location;
    // updatedProduct.timing = changedProduct.timing;
    // updatedProduct.save();
    const updatedProduct = await Product.findOne({
      where: { id: changedProduct.id },
      raw: true,
      include: [
        { raw: true, model: User },
        { raw: true, model: Category },
        { raw: true, model: View },
        { raw: true, model: ProductPhoto }],
    });
    res.json(updatedProduct);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
