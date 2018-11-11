const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// new creates new instance of the Google Strategy
// passport uses that strategy
// clientId and clientSecret is provided by Google Oauth service 

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token:', accessToken);
    console.log('refreshToken:', refreshToken);
    console.log('profile', profile);
    console.log('done', done);
  })
);

// in short it just watches requests trying to access this route '/auth/google' and tells passport to authenticate with google
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// tells Node to listen this port below
// either we get a port from Heroku environment variables and handle ports dynamically or just go with 5000 for local development
const PORT = process.env.PORT || 5000;
app.listen(PORT);