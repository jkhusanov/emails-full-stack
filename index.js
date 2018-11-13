const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User'); // order of this req and below one is important otherwise app will crash
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// cookies
app.use(
  cookieSession({
    // How long cooke can exist inside of browser before it's automatically expired
    // 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt a cookie
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// authroutes takes app object and attaches two routes to it
require('./routes/authRoutes')(app);

// tells Node to listen this port below
// either we get a port from Heroku environment variables and handle ports dynamically or just go with 5000 for local development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
