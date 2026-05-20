const Student = require("../models/Student");

// CREATE STUDENT
exports.createStudent = async (req, res) => {
    try {

        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student Added Successfully",
            student
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL STUDENTS
exports.getStudents = async (req, res) => {
    try {

        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET SINGLE STUDENT
exports.getSingleStudent = async (req, res) => {
    try {

        const student = await Student.findById(req.params.id);

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE STUDENT
exports.updateStudent = async (req, res) => {
    try {

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Student Updated Successfully",
            student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE STUDENT
exports.deleteStudent = async (req, res) => {
    try {

        await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Student Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};