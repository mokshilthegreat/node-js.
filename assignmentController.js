const Assignment = require("../models/Assignment");

exports.uploadAssignment = async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "File is required"
            });
        }

        const assignment = await Assignment.create({

            title: req.body.title,

            description: req.body.description,

            studentId: req.body.studentId,

            file: req.file.path
        });

        res.status(201).json({
            success: true,
            message: "Assignment Uploaded",
            assignment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};