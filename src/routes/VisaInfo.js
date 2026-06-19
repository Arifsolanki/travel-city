const express = require("express")
const route = express.Router()

const visaInfoController = require("../controller/VisaInfo")

route.post("/add",visaInfoController.addVisaInfo)

module.exports = route