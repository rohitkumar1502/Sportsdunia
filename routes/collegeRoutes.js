const express = require('express');
const { getCollegeData } = require('../controllers/collegePlacementController');
const { getCollegeCourses } = require('../controllers/collegeCourseController');
const { getCollegesByCityOrState } = require('../controllers/getCollegesByCityOrState');

const collegeRouter = express.Router();

collegeRouter.get('college_data/:college_id', getCollegeData);
collegeRouter.get('college_courses/:college_id', getCollegeCourses);
collegeRouter.get('colleges', getCollegesByCityOrState);

module.exports = collegeRouter;
