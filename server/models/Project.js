const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String
  },
  techStack: [{
    type: String
  }],
  image: {
    type: String
  },
  liveLink: {
    type: String
  },
  githubLink: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
