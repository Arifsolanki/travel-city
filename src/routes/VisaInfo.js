const express = require("express")
const route = express.Router()

const visaInfoController = require("../controller/VisaInfo")

route.post("/add",visaInfoController.addVisaInfo)
route.get("/read",visaInfoController.getVisaInfo)

module.exports = route