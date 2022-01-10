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

    //Pull #O line from array. add too template as author

    //Check for description strings and push to array.
    const strings = array.filter((line) => line.includes('#C'));
    strings.forEach((string) => {
      const stringArray = string.split(' ');
      stringArray.shift();
      //Join arrays and remove line breaks.
      const newString = stringArray.join(' ').replace(/(\r\n|\n|\r)/gm, '');
      templateArray['description'].push(newString);
    });

    //Use line with x and y values. Trim and convert to object key value pair with number type.
    const sizesData = array.filter(
      (line) => line.includes('x = ') && line.includes('y = ')
    );
    sizesData.forEach((string) => {
      let data = string.replace(/\s/g, '').split(',');
      data = data.map((string) =>
        Object.fromEntries(new URLSearchParams(string).entries())
      );
      data = { ...data[0], ...data[1] };
      Object.keys(data).forEach((key) => (data[key] = Number(data[key])));
      templateArray.size = data;
    });

    //Find all rle strings. Join them and remove line breaks. Than add rle string to template.
    const rleArray = array.filter((string) => {
      if (
        string.includes('#') ||
        string.includes('x = ') ||
        string.includes('y = ')
      ) {
        return;
      } else {
        return string;
      }
    });
    console.log(templateArray);
    templateArray.rleString = rleArray.join('').replace(/(\r\n|\n|\r)/gm, '');
    return templateArray;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

module.exports = fileParse;
