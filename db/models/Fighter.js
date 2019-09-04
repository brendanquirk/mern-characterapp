const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
  name: String,
  health: Number,
  attack: Number,
  defense: Number,
  weapon: String
})

module.exports = mongoose.model('Fighter', fighterSchema);
