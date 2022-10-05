const express = require('express');
const { RentProduct, User, Product } = require('../db/models');

const router = express.Router();

router.post('/:id', async (req, res) => {
  try {
    const {
      pid, uid, message, timing,
    } = req.body;
    const newOrder = await RentProduct.create({
      user_renter: uid, timing, message, product_id: pid,
    });
    res.json(newOrder);
  } catch (err) {
    console.error(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const { id } = req.session.userSession;
    console.log(id);
    const allProducts = await Product.findAll({
      where: {
        user_id: id,
      },
      include: [
        { model: RentProduct },
      ],
    });
    console.log('allProducts', allProducts);
    const myOrder = await Promise.all(allProducts.map((el) => RentProduct.findOne({
      where: { product_id: el.dataValues.id },
      include: [
        { model: User },
      ],
    })));
    console.log('myOrder', myOrder);
    res.json(myOrder);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
