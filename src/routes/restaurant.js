const express = require('express');
const route = express.Router();
const {createRestaurant, getRestaurants, getRestaurantById}= require('../controllers/restaurant');

route.post('/', createRestaurant);
route.get('/', getRestaurants);
route.get('/:id', getRestaurantById);

module.exports = route;