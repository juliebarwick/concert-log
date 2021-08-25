require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./db');
const { getAllEntries, postOneEntry } = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/entries', getAllEntries);
app.post('/entry', postOneEntry);

app.listen(PORT);
