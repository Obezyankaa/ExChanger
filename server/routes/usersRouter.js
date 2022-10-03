const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const finduser = await User.findOne({ where: { id } });
  const changer = finduser.photo;
  const user = await User.findOne({ where: { id } });
  res.json(user);
});
module.exports = router;
