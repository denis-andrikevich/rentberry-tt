const { join } = require('path');

module.exports = {
  DIST_FOLDER: join(process.cwd(), 'dist'),
  ROOT_FOLDER: join(process.cwd(), 'server')
}