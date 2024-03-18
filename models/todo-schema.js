const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Ensures leading/trailing whitespaces are removed
  },
  completed: {
    type: Boolean,
    default: false // Sets default value to false if not provided
  },
  createdAt: {
    type: Date,
    default: Date.now // Sets default value to current timestamp if not provided
  },
  updatedAt: {
    type: Date,
    default: Date.now // Sets default value to current timestamp if not provided
  }
});

// Update 'updatedAt' field on every update operation
todoSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Add virtual field 'timeElapsed' to calculate time since creation
todoSchema.virtual('timeElapsed').get(function() {
  return Date.now() - this.createdAt;
});

// Set 'toJSON' option to include virtuals when converting to JSON
todoSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Todo', todoSchema);
