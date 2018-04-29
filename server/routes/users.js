const express = require('express');
const { User } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.post('/checkusername', (req, res) => {
  const username = req.body.username.toLowerCase();

  User.find({ username }, (err, users) =>
    err ? res.status(400).send({ message: 'Check username failed', err, username }) : users[0]
      ? res.send({ available: false, message: 'Username exists', username })
      : res.send({ available: true, message: 'Username available', username }));
});
