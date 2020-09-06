const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  serie: { type: mongoose.Schema.ObjectId, required: true },
});

const model = new mongoose.model('Seasons', seasonSchema);

module.exports = model;
