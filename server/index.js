require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
require('./db');
const multer = require('multer');
const controller = require('./controllers');

// Multer configurations
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    // 5MB
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use('/uploads', express.static(path.join(__dirname, '../', 'uploads')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/entries', controller.getAllEntries);
app.post('/entry', controller.postOneEntry);
app.get('/photos', controller.getAllPhotos);
app.patch('/upload/:id', controller.updateOnePhoto);

// Get address coordinates
app.get('/mapaddress', (req, res) => {
  const { address } = req.query;

  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      key: process.env.GOOGLE_API_KEY,
      address,
    },
  })
    .then((data) => {
      res.status(200).send(data.data.results[0]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.post('/uploadmulter', upload.single('photo'), controller.updateOnePhoto);

app.listen(PORT);
