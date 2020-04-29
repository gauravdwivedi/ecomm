const express = require('express');

const router = express.Router();

//Redirects from routes to api
router.use('/api', require('./api'));

module.exports = router;