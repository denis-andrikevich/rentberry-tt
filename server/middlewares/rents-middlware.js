const requiredKeys = ['lat', 'lng', 'city', 'street', 'house'];

module.exports = (req, res, next) => {
  let hasAllParams = true; 
  let i = 0;

  while (i < requiredKeys.length && hasAllParams) {
    hasAllParams = req.query.hasOwnProperty(requiredKeys[i]);
    i++;
  }  

  req.hasAllParams = hasAllParams;
  next();
}
