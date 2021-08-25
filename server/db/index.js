const mongoose = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect('mongodb://localhost:27017/journal', options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
