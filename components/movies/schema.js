const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  description: String,
  year: Number,
  clasification: String,
  src: String,
  cover: String,
});

const model = mongoose.model('Movies', movieSchema)
module.exports = model
