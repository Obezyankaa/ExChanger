const express = require('express');
const axios = require('axios');
const { Product, Category, ProductPhoto } = require('../db/models');
const fileMiddleware = require('../middlewares/file');

const router = express.Router();

router.post('/', fileMiddleware.array('dropPhoto', 2), async (req, res) => {
  try {
    const category = await Category.findOne({ where: { name: req.body.category } });
    const resultGeocoder = await axios.get(`https://catalog.api.2gis.com/3.0/items/geocode?q=${encodeURIComponent(inputs.location)}&fields=items.point&key=ruqevb3357`);
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
module.exports = router;
