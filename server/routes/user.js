const bcrypt = require('bcryptjs');
const express = require('express');

const { User } = require('../database/schemas');

const { requireAuth } = require('./middleware');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  const user = req.user || {};

  res.send({ message: 'User info successfully retreived', user });
});

router.put('/password', requireAuth, (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (req.user.validPassword(oldPassword)) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        res.status(400).send({ err, message: 'Error updating password' });
      }
      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) {
          res.status(400).send({ err, message: 'Error updating password' });
        }

        User.findByIdAndUpdate({ _id: req.user._id }, { password: hash })
          .then(() => {
            res.status(200).send({ message: 'Password successfully updated' });
          })
          .catch(err => {
            res.status(400).send({ err, message: 'Error updating password' });
          });
      });
    });
  } else {
    res.status(400).send({ message: 'Old password did not match' });
  }
});

router.put('/', requireAuth, (req, res) => {
  req.body.updatedAt = Date.now();

  User.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true })
    .then((user) => {
      res.status(200).send({ message: 'User successfully updated', user });
    })
    .catch(err => {
      res.status(400).send({ err, message: 'Error updating user' });
    });
});
