const express = require('express');

const routes = express.Router();

const webpage = require('../controllers/webpage');

routes.get('/api/findcar', webpage.findAdvertising);

module.exports = routes;
