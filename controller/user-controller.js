const User = require('../models/user-schema');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
  // Find the user
  console.log("_____>",req.body);
  const user = await User.findOne({
    email: req.body.email,
  });

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Check if the password is correct
  // Generate a token
  const token = jwt.sign({ id: user._id }, 'Bajracharya');
  // Send the token to the user
  res.json({ token: token });
  // Return the user
  return user;
}

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
  

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
} 

const getUserbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
 
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(user);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  } 
}
  
module.exports = {createUser, getUser, getUserbyId,deleteUser,updateUser,login};