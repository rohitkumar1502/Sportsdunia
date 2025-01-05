const mongoose = require("mongoose");
const CollegeCourseSchema = new mongoose.Schema({
  college_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },
  course_duration: {
    type: String,
    required: true,
  },
  course_fee: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CollegeCourse", CollegeCourseSchema);
