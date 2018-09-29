const express = require('express');
const { requireAuth } = require('./middleware');
const { Todo } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  Todo.find({ user: req.user.id }, { __v: 0, user: 0 }, (err, todos) => {
    if (err) {
      res.status(400).send({ message: 'Get users failed', err });
    }
    if (todos) {
      res.send({ message: 'Todos retrieved successfully', todos });
    }
  });
});

router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newTodo = Todo(req.body);


  newTodo.save((err, savedTodo) => {
    if (err || !savedTodo) {
      res.status(400).send({ message: 'Create todo failed', err });
    } else {
      res.send({ message: 'Todo created successfully', todo: savedTodo.hide() });
    }
  });
});
