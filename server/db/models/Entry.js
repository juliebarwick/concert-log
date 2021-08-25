const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  entry: { type: String, required: true },
  address: { type: String, required: true },
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
