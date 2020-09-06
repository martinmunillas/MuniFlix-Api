const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String, required: true },
  cast: { type: [String], required: true },
  year: { type: Number, required: true },
  clasification: { type: String, required: true },
  duration: { type: Number, required: true },
  src: { type: String, required: true },
  cover: { type: String, required: true },
});

const model = mongoose.model('Movies', movieSchema);
module.exports = model;
