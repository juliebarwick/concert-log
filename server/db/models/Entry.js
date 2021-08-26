const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  concertDate: { type: Date, default: Date.now },
  dateAdded: { type: Date, default: Date.now },
  entry: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
