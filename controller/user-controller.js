const User = require('../models/user-schema');

const createUser = async (req, res) => {  
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
  
    try {
      const newUser = await user.save(); 
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }   
  
  module.exports = {createUser};