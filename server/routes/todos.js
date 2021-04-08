const express = require('express');
const { requireAuth } = require('./middleware');
const { Todo } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  Todo.find({ user: req.user.id }, { __v: 0, user: 0 }, (err, todos) => {
    if (err) {
      res.status(400).send({ message: 'Get users failed', err });
    } else {
      res.send({ message: 'Todos retrieved successfully', todos });
    }
  });
});

router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newTodo = Todo(req.body);

  newTodo.save((err, savedTodo) => {
    if (err) {
      res.status(400).send({ message: 'Create todo failed', err });
    } else {
      res.send({ message: 'Todo created successfully', todo: savedTodo });
    }
  });
});

router.put('/complete', requireAuth, (req, res) => {
  Todo.findById(req.body.id, { __v: 0, user: 0 }, (err, todo) => {
    if (err) {
      res.status(400).send({ message: 'Toggle todo failed', err });
    } else {
      todo.completed = !todo.completed;
      todo.save((err, savedTodo) => {
        if (err) {
          res.status(400).send({ message: 'Toggle todo failed', err });
        } else {
          res.send({ message: 'Toggled complete todo successfully', todo: savedTodo });
        }
      });
    }
  });
});

router.put('/', requireAuth, (req, res) => {
  Todo.findById(req.body.id, { __v: 0, user: 0 }, (err, todo) => {
    if (err) {
      res.status(400).send({ message: 'Update todo failed', err });
    } else {
      todo.text = req.body.text;
      todo.updated_at = Date.now();
      todo.save((err, savedTodo) => {
        if (err) {
          res.status(400).send({ message: 'Update todo failed', err });
        } else {
          res.send({ message: 'Updated todo successfully', todo: savedTodo });
        }
      });
    }
  });
});

router.delete('/', requireAuth, (req, res) => {
  Todo.findByIdAndRemove(req.body.id, err => {
    if (err) {
      res.status(400).send({ message: 'Delete todo failed', err });
    } else {
      res.send({ message: 'Todo successfully delete' });
    }
  });
});
