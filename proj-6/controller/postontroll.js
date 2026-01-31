const Post = require("../models/Post");

exports.createPostForm = (req,res) => {
  res.render("posts/create",{ user:req.user, title:"Create Post" });
};

exports.createPost = async (req,res) => {
  try{
    const { title, body } = req.body;
    await Post.create({ title, body, author: req.user._id });
    req.flash("success","Post created successfully");
    res.redirect("/posts");
  }catch(err){
    console.error(err);
    req.flash("error","Something went wrong");
    res.redirect("/posts/create");
  }
};

exports.listPosts = async (req,res) => {
  const posts = await Post.find().populate("author").sort({ createdAt:-1 });
  res.render("posts/list",{ user:req.user, posts, title:"All Posts" });
};