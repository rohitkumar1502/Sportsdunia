const College = require("../models/collegesSchema");

// Controller function for /colleges
const getCollegesByCityOrState = async (req, res) => {
  try {
    const { city, state } = req.query;

    // Build the query object
    const query = {};
    if (city) query.city_id = city;
    if (state) query.state_id = state;

    // Fetch colleges based on query parameters
    const colleges = await College.find(query).sort({ score: -1 });

    // Check if colleges exist
    if (!colleges || colleges.length === 0) {
      return res
        .status(404)
        .json({ message: "No colleges found for the given criteria." });
    }

    res.status(200).json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { getCollegesByCityOrState };
