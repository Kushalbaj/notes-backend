const Todo = require('../models/todo-schema');

// Controller actions
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('todo.ejs', { todos: todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTodo = async (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    completed: req.body.completed || false
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
module.exports = { getAllTodos, createTodo};
