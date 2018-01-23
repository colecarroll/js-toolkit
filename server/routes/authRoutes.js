const passport = require("passport");
// const mongoose = require("mongoose");
// const User = mongoose.model("users");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      if (req.user.googleId && req.user.emailSub) {
        res.redirect("/dashboard");
      } else {
        res.redirect("/emailSubscribe");
      }
    }
  );

  app.get("/api/logout", (req, res) => {
    //passport attaches logout function to req object
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.put("/api/email_sub", requireLogin, async (req, res) => {
    req.user.emailSub = true;
    console.log(req.user);
    const user = await req.user.save();
    res.send(user);
  });
};
