const VisaInfo = require("../models/VisaInfo")
const country = require("../models/Country")
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

const getVisaInfo = async (req, res) => {
    let giveRes = {
        success: false,
        message: "Something went wrong",
        data: null
    }

    try {
        let visaDetails = req.body

        let filterVisaInfo = {}

        if (visaDetails.country) {
            filterVisaInfo.country = visaDetails.country
        }

        if (visaDetails.passportCountry) {
            filterVisaInfo.passportCountry = visaDetails.passportCountry
        }

        if (visaDetails.visaType) {
            filterVisaInfo.visaType = visaDetails.visaType
        }

        if (visaDetails.applicationMode) {
            filterVisaInfo.applicationMode = visaDetails.applicationMode
        }

        let visaInfoDbRes = await VisaInfo.find(filterVisaInfo).populate("country")

        giveRes.success = true
        giveRes.message = "Visa Info fetched successfully!"
        giveRes.data = visaInfoDbRes

        return res.status(200).send(giveRes)

    } catch (error) {
        console.log("Error in getting visa info", error)

        giveRes.message = error.message

        return res.status(500).send(giveRes)
    }
}


module.exports = {
    addVisaInfo,
    getVisaInfo
}