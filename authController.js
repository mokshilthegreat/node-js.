const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerPage = (req,res)=>{
    res.render("register");
};

exports.loginPage = (req,res)=>{
    res.render("login");
};

exports.register = async (req,res)=>{
    const {username,password} = req.body;

    const hash = await bcrypt.hash(password,10);

    await User.create({username,password:hash});

    res.redirect("/login");
};

exports.login = async (req,res)=>{
    const user = await User.findOne({username:req.body.username});

    if(!user) return res.send("User not found");

    const match = await bcrypt.compare(req.body.password,user.password);

    if(!match) return res.send("Wrong password");

    const token = jwt.sign(
        {id:user._id, role:user.role},
        "secretkey"
    );

    res.cookie("token",token);
    res.redirect("/tasks");
};

exports.logout = (req,res)=>{
    res.clearCookie("token");
    res.redirect("/login");
};