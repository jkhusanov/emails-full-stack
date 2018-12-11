const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// for cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
// new creates new instance of the Google Strategy
// passport uses that strategy
// clientId and clientSecret is provided by Google Oauth service

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // check first if database already has a user with the given profile ID
      let existingUser = await User.findOne({ googleId: profile.id });

      // we already have a record with the given profile ID
      // we are finished, done for google
      if (existingUser) {
        return done(null, existingUser);
      }

      // we don't have a user with this ID, make anew record
      // saves user in MongoDB database and notifies google that we're done
      let user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
