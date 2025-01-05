const mongoose = require("mongoose");

const CollegePlacementSchema = new mongoose.Schema({
  college_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  highest_placement: {
    type: Number,
  },
  average_placement: {
    type: Number,
  },
  median_placement: {
    type: Number,
  },
  placement_rate: {
    type: Number,
  },
});

module.exports = mongoose.model("CollegePlacement", CollegePlacementSchema);
