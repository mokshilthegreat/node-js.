const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controller/authController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/register", ensureGuest, (req,res)=>res.render("register"));
router.post("/register", ensureGuest, authController.registerUser);

router.get("/login", ensureGuest, (req,res)=>res.render("login"));
router.post("/login", ensureGuest, passport.authenticate("local", {
  successRedirect:"/dashboard",
  failureRedirect:"/login",
  failureFlash:true
}));

router.get("/dashboard", ensureAuth, authController.dashboard);

router.get("/logout",(req,res,next)=>{
  req.logout(err=>{
    if(err) return next(err);
    req.flash("success","Logged out successfully");
    res.redirect("/login");
  });
});

module.exports = router;