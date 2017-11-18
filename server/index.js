require('dotenv').config();
const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

const YoutuberRouter = require('./router/youtuber/index');

app.use(cors());
app.use(
  '/static/css',
  express.static(path.resolve(__dirname, '../build/static/css'))
);
app.use(
  '/static/js',
  express.static(path.resolve(__dirname, '../build/static/js'))
);
app.use('/api', YoutuberRouter);
app.use('/', (req, res) => {
  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    (err, data) => {
      res.status(200).send(data);
    }
  );
});

app.listen(8080);
