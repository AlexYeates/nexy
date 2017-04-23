const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  readMore: { type: String, required: true }
});

module.exports = mongoose.model('Highligh', highlightSchema);
