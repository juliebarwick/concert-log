const Entry = require('../db/models/Entry');

module.exports = {
  getEntries: () => Entry.find(),

  createEntry: ({ title, entry, address }) => {
    const newEntry = new Entry({
      title, entry, address,
    });
    return newEntry.save();
  },
};
