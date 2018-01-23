module.exports = (req, res, next) => {
  //next is function that gets called when current middleware is done running, and req gets passed to next middleware in the chain
  if (!req.user) {
    return res.status(401).send({
      error: "You must log in"
    });
  }

  next();
};
