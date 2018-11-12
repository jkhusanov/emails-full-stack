const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// authroutes takes app object and attaches two routes to it
require('./routes/authRoutes')(app);

// tells Node to listen this port below
// either we get a port from Heroku environment variables and handle ports dynamically or just go with 5000 for local development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
