const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req,res,next)=>{
    const token = req.cookies.token;

    if(!token) return res.redirect("/login");

    const data = jwt.verify(token,"secretkey");

    req.user = data;

    next();
};