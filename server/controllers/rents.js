const { readFileSync } = require('fs');
const { ROOT_FOLDER } = require('../config');
const { join } = require('path');

const results = JSON.parse(readFileSync(join(ROOT_FOLDER, 'data', 'results.json')));
const top = JSON.parse(readFileSync(join(ROOT_FOLDER, 'data', 'top.json')));

module.exports = (req, res) => {
  const body = {
    top: req.geoip.city ? top.body.filter((item) => ~item.address.indexOf(req.geoip.city)) : [],
    result: req.hasAllParams ? results.body : []
  };

  res.json({
    body,
    error: {
      code: 200,
      message: "All good"
    }
  });
}
