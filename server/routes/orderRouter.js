const express = require('express');

const router = express.Router();

router.post('/:id', async (req, res) => {
  try {
    const { pid } = req.body;
    const { uid } = req.body;
    const newOrder = req.body;
    console.log(pid, uid);
    res.json(pid);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
