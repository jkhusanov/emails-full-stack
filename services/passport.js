const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
// new creates new instance of the Google Strategy
// passport uses that strategy
// clientId and clientSecret is provided by Google Oauth service

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token:', accessToken);
      console.log('refreshToken:', refreshToken);
      console.log('profile', profile);
      console.log('done', done);
    }
  )
);
