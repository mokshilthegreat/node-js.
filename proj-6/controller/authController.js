const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req,res) => {
  try{
    const { username,email,password } = req.body;
    if(!username || !email || !password){
      req.flash("error","All fields are required");
      return res.redirect("/register");
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
      req.flash("error","Email already registered");
      return res.redirect("/register");
    }

    await User.create({ username,email,password });
    req.flash("success","Registration successful. Please login.");
    res.redirect("/login");

  }catch(err){
    console.error(err);
    req.flash("error","Something went wrong");
    res.redirect("/register");
  }
};

exports.dashboard = (req,res) => {
  res.render("dashboard",{ user: req.user, title: "Dashboard" });
};