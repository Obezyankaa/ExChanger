const express = require('express');
const {
  Product, ProductPhoto, Category, View,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prodArg = await Product.findByPk(
      id,
      {
        include: [
          { model: ProductPhoto, attributes: ['photo'] },
          { model: Category, attributes: ['name'] },
          // { model: View, attributes: [''] },

        ],
      },
    );
    res.json(prodArg);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
