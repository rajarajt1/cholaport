const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  skills: [{
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      default: 'Intermediate'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
