
const where = require('node-where');

module.exports = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  where.is(ip, (err, result) => {
    if (err) return next(err);
    req.geoip = result.attributes;
    next();
  });
};
