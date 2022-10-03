const express = require('express');
const { Favorits } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { user_id, product_id } = req.body;
  const newQuote = await Favorits.create({ user_id, product_id });
  res.json(newQuote);
});

router.get('/', async (req, res) => {
//   const favorites = await Favorits.findAll({
//     raw: true,
//     where: {
//       user_id:
//     req.session?.userSession.id,
//     },
//   });
//   res.json(favorites);
  res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Favorits.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
