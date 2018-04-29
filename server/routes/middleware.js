const requireAuth = (req, res, next) =>
  !req.user ? res.status(401).send({ message: 'User not authenticated' }) : next();

module.exports = {
  requireAuth,
};
