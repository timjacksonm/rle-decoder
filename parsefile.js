const fs = require('fs');
const { sanitize, extractKeyValuePairs } = require('./helperfunctions');

function parseFile(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const array = data.toString().split('\n');

    //extract lines from file
    let author = array.filter((line) => /\#[O]/g.test(line));
    let title = array.filter((line) => /\#[N]/g.test(line));
    let description = array.filter((line) => /\#[C]/g.test(line));
    let size = array.filter(
      (line) => /x = \d/g.test(line) && /y = \d/g.test(line)
    );
    let rleString = array.filter(
      (string) =>
        !string.includes(' ') &&
        string.includes('b') &&
        string.includes('o') &&
        string.includes('$')
    );

    if (author.length) {
      author = sanitize(author[0]);
    } else author = '';

    if (title.length) {
      title = sanitize(title[0]);
    } else title = '';

    if (description.length) {
      description = description.map((string) => sanitize(string));
    } else description = '';

    if (size.length) {
      size = extractKeyValuePairs(size[0]);
    } else size = '';

    if (rleString.length) {
      rleString = rleString.join('').replace(/(\r\n|\n|\r)/gm, '');
    } else rleString = '';

    return { title, author, description, size, rleString };
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

module.exports = parseFile;
