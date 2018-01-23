const passport = require("passport");

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
      console.log(req.user);
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
};
