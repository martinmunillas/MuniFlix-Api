const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  number: Number,
  serie: mongoose.Schema.ObjectId
});

const model = new mongoose.model('Seasons', seasonSchema)

module.exports = model