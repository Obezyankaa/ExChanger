const express = require('express');
const { Coment } = require('../db/models');

const router = express.Router();

router.post('/addcomment', async (req, res) => {
  const { input } = req.body;
  const { pid } = req.body;
  const { uid } = req.body;
  const newComment = await Coment.create({ text: input, user_id: uid, product_id: pid });
  res.json(newComment);
});

module.exports = router;
