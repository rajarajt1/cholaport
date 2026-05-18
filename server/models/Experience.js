const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  responsibilities: [{
    type: String
  }],
  technologies: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);
