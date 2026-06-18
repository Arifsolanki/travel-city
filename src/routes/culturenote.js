const express = require("express")
const route = express.Router()
const cultureNote = require("../controllers/CultureNote")

route.post("/", cultureNote.createCultureNote)
route.delete("/:id", cultureNote.getCultureNote)

module.exports = route