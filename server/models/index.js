const Entry = require('../db/models/Entry');

module.exports = {
  getEntries: () => Entry.find().sort({ concertDate: -1 }),

  createEntry: ({
    title,
    entry,
    address,
    concertDate,
  }) => {
    const newEntry = new Entry({
      title, entry, address, concertDate,
    });
    return newEntry.save();
  },

  getPhotos: (id) => Entry.findById(id).select('photos'),

  updatePhoto: async (id, filePath) => (
    Entry.findByIdAndUpdate(id, {
      $push: { photos: filePath },
    })
  ),

  updateEntry: async (id, entry) => Entry.findByIdAndUpdate(id, entry),

};
