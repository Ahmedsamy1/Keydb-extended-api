const express = require('express');

const servicesController = require('../controllers/ServicesController');

const router = express.Router();

router.get('/api/ping', servicesController.Ping);

module.exports = router;