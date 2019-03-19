const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User'); // order of this req and below one is important otherwise app will crash
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());
// cookies
app.use(
  cookieSession({
    // How long cooke can exist inside of browser before it's automatically expired
    // 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt a cookie
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// authroutes takes app object and attaches two routes to it
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
// tells Node to listen this port below
// either we get a port from Heroku environment variables and handle ports dynamically or just go with 5000 for local development

// Runs only if we are in production (heroku)
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  // in other words, with will run if all serve routes fail / doesn't exist.
  // it assumes that React Router (library) know what to do with the incoming route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
