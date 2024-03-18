const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures uniqueness of email addresses
    // Validate email format using regex
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    // Add validation for password length, can be customized as needed
    validate: {
      validator: function(v) {
        return v.length >= 6; // Password must be at least 6 characters long
      },
      message: props => `Password must be at least 6 characters long!`
    }
  }
});

module.exports = mongoose.model('User', userSchema);
