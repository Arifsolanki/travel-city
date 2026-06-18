const express = require('express');
const router = express.Router();
const {addReview} = require('../controllers/Review');

router.post('/add', addReview);
module.exports = router;