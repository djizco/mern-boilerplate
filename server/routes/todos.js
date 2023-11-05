const express = require('express');

const { Todo } = require('../database/schemas');

const { requireAuth } = require('./middleware');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  Todo.find({ user: req.user.id }, { user: 0 })
    .then(todos => {
      res.send({ message: 'Todos retrieved successfully', todos });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get users failed', err });
    });
});

router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newTodo = Todo(req.body);

  newTodo.save()
    .then(savedTodo => {
      res.send({ message: 'Todo created successfully', todo: savedTodo });
    })
    .catch(err => {
      res.status(400).send({ message: 'Create todo failed', err });
    });
});

router.put('/complete', requireAuth, (req, res) => {
  Todo.findById(req.body.id, { __v: 0, user: 0 })
    .then(todo => {
      todo.completed = !todo.completed;

      todo.save()
        .then(savedTodo => {
          res.send({ message: 'Toggled complete todo successfully', todo: savedTodo });
        })
        .catch(err => {
          res.status(400).send({ message: 'Toggle todo failed', err });
        });
    })
    .catch(err => {
      res.status(400).send({ message: 'Toggle todo failed', err });
    });
});

router.put('/', requireAuth, (req, res) => {
  Todo.findById(req.body.id, { __v: 0, user: 0 })
    .then(todo => {
      todo.text = req.body.text;
      todo.updatedAt = Date.now();

      todo.save()
        .then(savedTodo => {
          res.send({ message: 'Updated todo successfully', todo: savedTodo });
        })
        .catch(err => {
          res.status(400).send({ message: 'Update todo failed', err });
        });
    })
    .catch(err => {
      res.status(400).send({ message: 'Update todo failed', err });
    });
});

router.delete('/', requireAuth, (req, res) => {
  Todo.findByIdAndRemove(req.body.id)
    .then(() => {
      res.send({ message: 'Todo successfully delete' });
    })
    .catch((err) => {
      res.status(400).send({ message: 'Delete todo failed', err });
    });
});
