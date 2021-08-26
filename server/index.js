require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./db');
const controller = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/entries', controller.getAllEntries);
app.post('/entry', controller.postOneEntry);
app.get('/photos', controller.getAllPhotos);
app.patch('/upload/:id', controller.updateOnePhoto);

app.listen(PORT);
