const express = require('express');
const path = require('path');

const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.listen(3000);
