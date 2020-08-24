const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  name: String,
  description: String,
  number: Number,
  season: mongoose.Schema.ObjectId,
  src: String
});

const model = new mongoose.model('Episodes', episodeSchema)

module.exports = model