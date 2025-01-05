const CollegeCourse = require("../models/collegeWiseCourseSchema");

// Controller function for /college_courses/:college_id
const getCollegeCourses = async (req, res) => {
  try {
    const { college_id } = req.params;

    // Query database for courses corresponding to the college_id
    const courses = await CollegeCourse.find({ college_id }).sort({
      course_fee: -1,
    });

    // Check if courses exist
    if (!courses || courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No courses found for the given college ID." });
    }

    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { getCollegeCourses };
