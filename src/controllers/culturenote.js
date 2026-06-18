const Note = require("../models/CultureNote")

let sendRes = {
    success : true,
    message: 'success',
    data: {}
}
const createCultureNote = async (req, res) => {
    try {
        let noteDetails = req.body

        if (!noteDetails || !noteDetails.title || !noteDetails.country || !noteDetails.content) {
            sendRes.message = "Required Params missing"
            return res.status(400).send(
                sendRes
            )
        }
        //Insert in db
        let createnote = {
            title: noteDetails.title,
            country: noteDetails.country,
            content : noteDetails.content

        }

        if (noteDetails.city) {
            createnote.city = noteDetails.city
        }

        if (noteDetails.category) {
            createnote.category = noteDetails.category
        }
        if (noteDetails.tags) {
            createnote.tags = noteDetails.tags
        }

        let noteDbRes = await Note.create(createnote)

        if (noteDbRes) {
            sendRes.error = false
            sendRes.message = "CultureNote added successfully!"
            sendRes.data = noteDbRes
            return res.status(200).send(sendRes)
        }
    } catch (error) {
    console.log("Errro in adding CultureNote", error)

    return res.status(500).send({
        success: false,
        message: error.message,
        data: null
    })
}
}

module.exports = {
    createCultureNote,
}