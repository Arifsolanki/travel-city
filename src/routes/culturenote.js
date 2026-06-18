const express = require("express")
const route = express.Router()
const cultureNote = require("../controllers/CultureNote")

route.post("/", cultureNote.createCultureNote)

module.exports = route