const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.create(req.body);

        res.status(201).json({
            success: true,
            message: "Attendance Marked",
            attendance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};