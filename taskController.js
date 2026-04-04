
const Task = require("../models/Task");

exports.getTasks = async (req,res)=>{
    let tasks;

    if(req.user.role === "admin"){
        tasks = await Task.find().populate("user");
    } else {
        tasks = await Task.find({user:req.user.id});
    }

    res.render("taskList", {tasks, user:req.user});
};

exports.addTask = async (req,res)=>{
    await Task.create({
        title:req.body.title,
        desc:req.body.desc,
        user:req.user.id
    });

    res.redirect("/tasks");
};

exports.deleteTask = async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/tasks");
};