const { createEntry, getEntries } = require('../models');

module.exports = {
  getAllEntries: async (req, res) => {
    try {
      const data = await getEntries();
      res.json(data).sendStatus(200);
    } catch (err) {
      res.sendStatus(404);
    }
  },

  postOneEntry: async (req, res) => {
    try {
      await createEntry(req.body);
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
