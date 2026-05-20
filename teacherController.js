const Teacher = require("../models/Teacher");

// CREATE TEACHER
exports.createTeacher = async (req, res) => {
    try {

        const teacher = await Teacher.create(req.body);

        res.status(201).json({
            success: true,
            message: "Teacher Added Successfully",
            teacher
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};