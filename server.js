require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

const app = express()

// CONNECT DATABASE
connectDB()

// MIDDLEWARE
app.use(express.json())
app.use(cors())


const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const courseRoutes = require("./routes/courseRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const marksRoutes = require("./routes/marksRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/attendance", attendanceRoutes);

app.use("/api/marks", marksRoutes);

app.use("/api/assignments", assignmentRoutes);

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

