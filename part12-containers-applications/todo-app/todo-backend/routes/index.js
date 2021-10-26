const express = require('express');
const router = express.Router()
const configs = require('../util/config')
const redis = require('../redis')
const getAsync = redis.getAsync
const setAsync = redis.setAsync

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  
  res.json(await getAsync('added_todos'))
});

module.exports = router;
