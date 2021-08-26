const { createEntry, getEntries, getPhotos, updatePhoto } = require('../models');

module.exports = {
  getAllEntries: async (req, res) => {
    try {
      const data = await getEntries();
      res.status(200).json(data);
    } catch (err) {
      res.sendStatus(404);
    }
  },

  postOneEntry: async (req, res) => {
    console.log(req.body);
    try {
      await createEntry(req.body);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  getAllPhotos: async (req, res) => {
    try {
      const photos = await getPhotos();
      res.status(200).json(photos);
    } catch (err) {
      res.sendStatus(404);
    }
  },

  updateOnePhoto: async (req, res) => {
    console.log(req);
    const id = req.params.id;
    const url = req.body.photo;

    try {
      const photo = await updatePhoto(id, url);
      res.sendStatus(204).json(photo);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
