const express = require("express");

const router = express.Router();

const {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

router.post("/", createStudent);

router.get("/", getStudents);

router.get("/:id", getSingleStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;