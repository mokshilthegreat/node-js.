const express = require("express");

const router = express.Router();

const {
    addMarks
} = require("../controllers/marksController");

router.post("/", addMarks);

module.exports = router;