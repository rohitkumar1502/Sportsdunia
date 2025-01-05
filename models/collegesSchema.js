const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 1000,
  },
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  state_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: true,
  },
});

module.exports = mongoose.model("College", CollegeSchema);
