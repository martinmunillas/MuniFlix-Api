const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
  name: String,
  description: String,
  startYear: Number,
  finalYear: Number,
  clasification: String,
  cover: String,
});

const model = new mongoose.model('Series', seriesSchema)

module.exports = model