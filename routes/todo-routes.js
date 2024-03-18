const express = require('express');
const router = express.Router();
const {getAllTodos,createTodo} = require('../controller/todo-controller');

// Routes
router.get('/todo', getAllTodos);
router.post('/create-todo', createTodo);

module.exports = router;

