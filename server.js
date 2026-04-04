const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: true
}));

app.use('/admin', require('./routes/adminRoutes'));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});      