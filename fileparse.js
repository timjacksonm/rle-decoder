const fs = require('fs');

function fsparse(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

fsparse('./file.rle');

module.exports = fsparse;
