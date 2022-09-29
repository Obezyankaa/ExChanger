const express = require('express');
// const bcrypt = require('bcrypt');
// const { User } = require('../db/models');

const router = express.Router();

// router.post('/registration', async (req, res) => {
//   const { name, login, pass } = req.body;
//   const hashedPass = await bcrypt.hash(pass, 10);
//   const newUser = await User.create({
//     name,
//     login,
//     pass: hashedPass,
//   });
//   req.session.userSession = { name: newUser.name, login: newUser.login, id: newUser.id };
//   res.json(req.session.userSession).status(200);
// });

// router.post('/authorization', async (req, res) => {
//   const { login, pass } = req.body;
//   const newUser = await User.findOne({ where: { login } });
//   const compare = await bcrypt.compare(pass, newUser.pass);
//   if (compare) {
//     req.session.userSession = { login: newUser.login, name: newUser.name, id: newUser.id };
//     res.json(req.session.userSession).status(200);
//   } else {
//     res.sendStatus(401);
//   }
// });

// router.get('/logout', async (req, res) => {
//   try {
//     req.session.destroy();
//     res.clearCookie('user_sid');
//     res.sendStatus(200);
//   } catch (e) {
//     console.log(e);
//   }
// });

// router.post('/check', async (req, res) => {
//   if (req.session.userSession) {
//     return res.json(req.session.userSession);
//   }
//   return res.sendStatus(401);
// });

module.exports = router;
