const express = require("express");
const route = express.Router();
const { createCity, getCities, getCityById } = require("../controllers/city");

route.post("/", createCity);
route.get("/", getCities);
route.get("/:id", getCityById);

module.exports = route;

