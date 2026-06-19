const Country = require('../models/Country');

// Create a new country
const createCountry = async (req, res) => {
    let sendRes = {
"success": false,
"message": "Country creation failed",
"data": {}
    }
  try {
    let countryDetails = req.body;
    if (!countryDetails.name || !countryDetails.code || !countryDetails.continent || !countryDetails) {
        sendRes.message = "Missing required fields: name, code, continent";
        return res.status(400).send(sendRes);
    }
    let create = {
        name: countryDetails.name,
        code: countryDetails.code,
        continent: countryDetails.continent
    };
    if (countryDetails.description) 
        {create.description = countryDetails.description};
    if (countryDetails.currency) 
        {create.currency = countryDetails.currency};
    if (countryDetails.languages) 
        {create.languages = countryDetails.languages};
    if (countryDetails.bestTimeToVisit) 
        {create.bestTimeToVisit = countryDetails.bestTimeToVisit};
    if (countryDetails.safetyLevel) 
        {create.safetyLevel = countryDetails.safetyLevel}; 

    

    const newdoc = await Country.create(create);
    sendRes.success = true;
    sendRes.message = "Country created successfully";
    sendRes.data = newdoc;
    return res.status(201).send(sendRes)

  } catch (error) {
    sendRes.message = "Error creating country";
    return res.status(500).send(sendRes);
  }
};


module.exports = { createCountry };