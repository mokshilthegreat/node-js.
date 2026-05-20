const Marks = require("../models/Marks");

exports.addMarks = async (req, res) => {

    try {

        const marks = await Marks.create(req.body);

        res.status(201).json({
            success: true,
            message: "Marks Added Successfully",
            marks
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};