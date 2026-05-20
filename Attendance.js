const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

   studentId: {
    type: Number,
    required: true
},

    date: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["present", "absent"],
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Attendance", attendanceSchema);