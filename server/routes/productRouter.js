const express = require('express');
const axios = require('axios');
const {
  Product, Category, ProductPhoto, User, View,
} = require('../db/models');
const fileMiddleware = require('../middlewares/file');

const router = express.Router();

router.post('/', fileMiddleware.array('dropPhoto', 2), async (req, res) => {
  try {
    const category = await Category.findOne({ where: { name: req.body.category } });
    const resultGeocoder = await axios.get(`https://catalog.api.2gis.com/3.0/items/geocode?q=${encodeURIComponent(req.body.location)}&fields=items.point&key=ruqevb3357`);
    const newProduct = await Product.create({
      name: req.body.name,
      category_id: category.id,
      description: req.body.description,
      status: true,
      price: req.body.price,
      user_id: req.session.userSession.id,
      location: `${resultGeocoder.data.result.items[0].point.lat}, ${resultGeocoder.data.result.items[0].point.lon}`,
      timing: req.body.timing,
    });
    for (let i = 0; i < req.files.length; i += 1) {
      const result = await ProductPhoto.create({
        photo: req.files[i].originalname,
        product_id: newProduct.dataValues.id,
      });
    }
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const AllProds = await Product.findAll({
      include: [
        { model: User },
        { model: Category },
        { model: View },
        { model: ProductPhoto },
      ],
      order: [['createdAt', 'DESC']],
    });
    res.json(AllProds);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// router.get('/photo/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const AllPhotos = await ProductPhoto.findAll({
//       where: { product_id: id },
//     });
//     res.json(AllPhotos);
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });

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
        { model: User },
        { model: Category },
        { model: View },
        { model: ProductPhoto }],
    });
    res.json(updatedProduct);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
