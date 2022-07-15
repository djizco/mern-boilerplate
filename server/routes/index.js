const express = require('express');
const path = require('path');

const auth         = require('./auth');
const user         = require('./user');
const users        = require('./users');
const todos        = require('./todos');

const router = express.Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/users', users);
router.use('/todos', todos);

router.get('/tags', (req, res) => {
  res.send([
    'MERN', 'Node', 'Express', 'Webpack', 'React', 'Redux', 'Mongoose',
    'Bulma', 'Fontawesome', 'Ramda', 'ESLint', 'Jest',
  ]);
});

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

module.exports = router;
