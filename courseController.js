const Course = require("../models/Course");

// CREATE COURSE
exports.createCourse = async (req, res) => {
    try {

        const course = await Course.create(req.body);

        res.status(201).json({
            success: true,
            message: "Course Added Successfully",
            course
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};