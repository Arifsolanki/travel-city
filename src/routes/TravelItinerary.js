const express = require("express")
const route = express.Router()
const itineraryController = require("../controllers/TravelItinerary")

route.post("/add",itineraryController.addItinerary)
route.get("/get",itineraryController.getItinerary)
route.get("/get/:id",itineraryController.getItineraryById)

module.exports = route