const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //user is what was returned from User.findOne or newUser operations below, it's the record of the user in our db
  //in user.id, mlab creates a unique id for each user in addition to the googleid, it's a unique identifier in mongo, if we had multiple oauths, the user might have a facebookid, linkedin id, etc, so we want to just reference the instance of the db
  //we only want to save our unique db id to our cookie
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //id is the id we have put into the cookie
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //we already  have a profile of existing user
        return done(null, existingUser);
      }
      //create new instance of user
      const user = await new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        emailSub: 0,
        lastCompletedLesson: 0,
        score: 0
      }).save();
      done(null, user);
    }
  )
);
