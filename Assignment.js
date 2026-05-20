const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    file: {
        type: String,
        required: true
    },

    studentId: {
        type: Number,
      
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Assignment", assignmentSchema);