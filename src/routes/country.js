const express = require('express');
const router = express.Router();
const countryRoutes  = require('../controllers/country');

// Route to create a new country
router.post('/add', countryRoutes.createCountry);

module.exports = router;