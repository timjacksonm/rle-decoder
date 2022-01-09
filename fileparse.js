const fs = require('fs');

function fileParse(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const array = data.toString().split('\n');

    let templateArray = {
      description: [],
      size: { x: null, y: null },
      rleString: [],
    };

    //check for description strings and push to array
    array.forEach((row, index) => {
      if (row.includes('#C')) {
        const stringArray = row.split(' ');
        stringArray.shift();
        templateArray['description'].push(stringArray.join(' '));
        array.splice(index, 1);
      }
    });

    //use line with x and y values. trim and convert to object key value pair with number type
    array.forEach((row, index) => {
      if (row.includes('x = ') && row.includes('y = ')) {
        let object = row.replace(/\s/g, '').split(',');
        object = object.map((string) =>
          Object.fromEntries(new URLSearchParams(string).entries())
        );
        object = { ...object[0], ...object[1] };
        Object.keys(object).forEach(
          (key) => (object[key] = Number(object[key]))
        );
        templateArray.size = object;
        array.splice(index, 1);
      }
    });

    //add rle string to template
    if (array.length === 1) {
      templateArray.rleString = array[0];
      array.splice(0, 1);
    }
    return templateArray;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

module.exports = fileParse;
