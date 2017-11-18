const express = require('express');
const axios = require('axios');
const R = require('ramda');

const { YOUTUBE_KEY } = process.env;

const router = express.Router();

router.get('/youtuber/:id', (req, res) => {
  const { id } = req.params;
  axios({
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${id}&key=${YOUTUBE_KEY}`
  })
    .then(response => {
      const { data } = response;
      res.status(200).send({
        payload: data
      });
    })
    .catch(err => {
      const { status, data: { error } } = R.path(['response'])(err);
      res.status(status).send({
        error: error
      });
    });
});

module.exports = router;
