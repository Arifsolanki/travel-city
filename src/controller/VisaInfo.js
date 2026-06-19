const VisaInfo = require("../models/VisaInfo")

const addVisaInfo = async (req, res) => {

    let giveRes = {
        success: false,
        message: "Something went wrong",
        data: null
    }

    try {

        let visaDetails = req.body

        if (
            !visaDetails ||
            !visaDetails.country ||
            !visaDetails.visaType
        ) {

            giveRes.message = "Required Params Missing"

            return res.status(400).send(giveRes)
        }

        let createVisaInfo = {

            country: visaDetails.country,
            visaType: visaDetails.visaType

        }

        if (visaDetails.passportCountry) {
            createVisaInfo.passportCountry = visaDetails.passportCountry
        }

        if (visaDetails.applicationMode) {
            createVisaInfo.applicationMode = visaDetails.applicationMode
        }

        if (visaDetails.documentsRequired) {
            createVisaInfo.documentsRequired = visaDetails.documentsRequired
        }

        if (visaDetails.processingTime) {
            createVisaInfo.processingTime = visaDetails.processingTime
        }

        if (visaDetails.fee) {
            createVisaInfo.fee = visaDetails.fee
        }

        if (visaDetails.officialWebsite) {
            createVisaInfo.officialWebsite = visaDetails.officialWebsite
        }

        if (visaDetails.notes) {
            createVisaInfo.notes = visaDetails.notes
        }

        let visaInfoDbRes = await VisaInfo.create(createVisaInfo)

        giveRes.success = true
        giveRes.message = "Visa Info Added Successfully!"
        giveRes.data = visaInfoDbRes

        return res.status(201).send(giveRes)

    } catch (error) {

        console.log("Error in adding visa info", error)

        giveRes.message = error.message

        return res.status(500).send(giveRes)
    }

}
module.exports = {
    addVisaInfo,
}