const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/taskRoutes"));

// DB
mongoose.connect("mongodb://127.0.0.1:27017/taskapp")
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(3000, ()=>{
    console.log("Server Started");
});