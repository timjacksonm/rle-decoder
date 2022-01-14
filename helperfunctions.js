const { URLSearchParams } = require('url');

function sanitize(string) {
  //remove # and letter in the beginning of string
  const stringArray = string.split(' ');
  stringArray.shift();
  //return string without multiline characters
  return stringArray.join(' ').replace(/(\r\n|\n|\r)/gm, '');
}

function extractKeyValuePairs(string) {
  //format : { x: num, y: num }
  let sizeObject = string.replace(/\s/g, '').split(',');
  sizeObject.length = 2;

  for (const sizes in sizeObject) {
    let keyValuePair = Object.fromEntries(
      new URLSearchParams(sizeObject[sizes]).entries()
    );
    keyValuePair[Object.keys(keyValuePair)] = Number(
      Object.values(keyValuePair)
    );
    sizeObject[sizes] = keyValuePair;
  }
  sizeObject = { ...sizeObject[0], ...sizeObject[1] };
  return sizeObject;
}

module.exports = {
  sanitize: sanitize,
  extractKeyValuePairs: extractKeyValuePairs,
};
