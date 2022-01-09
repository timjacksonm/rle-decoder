function decode(str, size) {
  rleString = str;
  const { x, y } = size;

  //on number repeat next letter number of times.
  //End by splitting on $ creating multiple lines
  let decoded = rleString
    .slice(0, -1)
    .replace(/(\d+)(\D)/g, function (match, num) {
      return match.split(num)[1].repeat(num);
    })
    .split('$');

  //replace letter 'o' with 1's & b with 0's ie - alive: 1 , dead: 0
  decoded = decoded.map((row) => row.replace(/o/g, 1));
  decoded = decoded.map((row) => row.replace(/b/g, 0));

  //for each row split into its own arrow containing single #'s
  decoded = decoded.map((row) => [...row.split('')]);

  //row length less than specifications add filler 0's
  decoded = decoded.map((row) => {
    if (row.length < x) {
      let filler = new Array(x - row.length).fill(0);
      let value = row.concat(filler);
      return value;
    } else {
      return row;
    }
  });

  //convert all string numbers to type of Number
  decoded = decoded.map((row) => row.map((string) => Number(string)));

  return decoded;
}

module.exports = decode;
