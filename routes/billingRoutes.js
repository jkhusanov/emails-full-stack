const keys = require('../config/keys');
// eslint-disable-next-line import/order
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    // Update user credits
    req.user.credits += 5;
    const user = await req.user.save(); // getting latest user model

    // send back the user back to the browser
    res.send(user);
  });
};
