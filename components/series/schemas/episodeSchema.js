const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  number: { type: Number, required: true },
  season: { type: mongoose.Schema.ObjectId, required: true },
  src: { type: String, required: true },
});

const model = new mongoose.model('Episodes', episodeSchema);

module.exports = model;
