const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cast: { type: [String], required: true },
  startYear: { type: Number, required: true },
  finalYear: { type: Number, required: true },
  clasification: { type: Number, required: true },
  cover: { type: String, required: true },
});

const model = new mongoose.model('Series', seriesSchema);

module.exports = model;
