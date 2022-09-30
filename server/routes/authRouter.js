const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const fileMiddleware = require('../middlewares/file');

const router = express.Router();

router.post('/registration', fileMiddleware.single('photo'), async (req, res) => {
  const {
    f_name, l_name, password, email, photo, telegram, phone,
  } = req.body;
  console.log(photo);
  console.log(req.file, '-----');
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    f_name, l_name, password: hashedPass, email, photo: req.file.originalname, telegram, phone,
  });
  req.session.userSession = { name: newUser.name, login: newUser.login, id: newUser.id };
  res.json(req.session.userSession).status(200);
});

router.post('/authorization', async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.findOne({ where: { email } });
  const compare = await bcrypt.compare(password, newUser.password);
  if (compare) {
    req.session.userSession = {
      email: newUser.email,
      f_name: newUser.fname,
      l_name: newUser.lname,
      id: newUser.id,
      img: newUser.photo,
    };
    res.json(req.session.userSession).status(200);
  } else {
    res.sendStatus(401);
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

router.post('/check', async (req, res) => {
  if (req.session.userSession) {
    return res.json(req.session.userSession);
  }
  return res.sendStatus(401);
});

module.exports = router;
