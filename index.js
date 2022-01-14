const parseFile = require('./parsefile');

parseFile('./example/average.rle');

module.exports = {
  parseFile: require('./parsefile'),
  decode: require('./decode'),
};
