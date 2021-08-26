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

  updatePhoto: async (id, url) => {
    // const photos = await Entry.findById(id);
    // photos.push(url);
    // return Entry.save();
    return Entry.findByIdAndUpdate(id, {
      $push: { photos: url },
    });
  },

};
