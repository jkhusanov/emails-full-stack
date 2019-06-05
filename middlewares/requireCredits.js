module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    // If a user is not signed in throw an error
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  // If the user is logged in, sending request to next middleware or simply continue
  next();
};
