exports.checkRole = (roles) => (req, res, next) => {
  const userRole = req.userRole;
  if (!roles.includes(userRole)) {
    return res.status(403).send({ message: 'Access denied' });
  }
  next();
};