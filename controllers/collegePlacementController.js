const CollegePlacement = require("../models/collegePlacementSchema");

// Controller function for /college_data/:college_id
const getCollegeData = async (req, res) => {
  try {
    const { college_id } = req.params;

    const avgSectionData = await CollegePlacement.aggregate([
      {
        $match: {
          college_id,
          $or: [
            { highest_placement: { $ne: null, $gt: 0 } },
            { average_placement: { $ne: null, $gt: 0 } },
            { median_placement: { $ne: null, $gt: 0 } },
            { placement_rate: { $ne: null, $gt: 0 } },
          ],
        },
      },
      {
        $group: {
          _id: "$year",
          avg_highest_placement: { $avg: "$highest_placement" },
          avg_average_placement: { $avg: "$average_placement" },
          avg_median_placement: { $avg: "$median_placement" },
          avg_placement_rate: { $avg: "$placement_rate" },
        },
      },
      {
        $project: {
          year: "$_id",
          avg_highest_placement: 1,
          avg_average_placement: 1,
          avg_median_placement: 1,
          avg_placement_rate: 1,
        },
      },
      { $sort: { year: 1 } },
    ]);

    const placementSectionData = await CollegePlacement.find({
      college_id,
      $or: [
        { highest_placement: { $ne: null, $gt: 0 } },
        { average_placement: { $ne: null, $gt: 0 } },
        { median_placement: { $ne: null, $gt: 0 } },
        { placement_rate: { $ne: null, $gt: 0 } },
      ],
    }).sort({ year: 1 });

    // Add placement_trend field
    let previousPlacementRate = null;
    const placementWithTrend = placementSectionData.map((placement) => {
      const trend =
        previousPlacementRate === null
          ? null
          : placement.placement_rate > previousPlacementRate
          ? "UP"
          : "DOWN";
      previousPlacementRate = placement.placement_rate;

      return {
        ...placement.toObject(),
        placement_trend: trend,
      };
    });

    // Combine results
    res.status(200).json({
      avg_section: avgSectionData,
      placement_section: placementWithTrend,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { getCollegeData };
