exports.ensureAuth = (req,res,next) => {
  if(req.isAuthenticated()) return next();
  req.flash("error","Please login first");
  res.redirect("/login");
};

exports.ensureGuest = (req,res,next) => {
  if(!req.isAuthenticated()) return next();
  res.redirect("/dashboard");
};