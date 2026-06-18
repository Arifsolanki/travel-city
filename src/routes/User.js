const express = require('express');
const router = express.Router();
const {addUser, getUsers, updateUser} = require('../controllers/User');

router.post('/add', addUser);
router.get('/get', getUsers);
router.get('/get/:id', getUsers);
router.put('/update/:id', updateUser);

module.exports = router;