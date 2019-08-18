const path = require('path');

module.exports = {
  process: (src, filename) => `module.exports = ${JSON.stringify(path.basename(filename))};`,
};
