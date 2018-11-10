const express = require('express');
const app = express();


// diagram 001-request types explains the whole concept of code below
// in short it just watches requests trying to access '/' and sends back JSON to whoever made this request  
app.get('/', (req, res) => {
  res.send({ hi: 'there!' });
});


// tells Node to listen this port below
// either we get a port from Heroku environmental variables and handle ports dynamically or just go with 5000 for local development
const PORT = process.env.PORT || 5000;
app.listen(PORT);