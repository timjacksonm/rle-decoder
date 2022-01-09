const { fileParse, decode } = require('./index.js');

test('parse rle file to javascript object', () => {
  expect(fileParse('./file.rle')).toEqual({
    description: ['This is a glider.'],
    size: { x: 3, y: 3 },
    rleString: 'bo$2bo$3o!',
  });
});

test('decode rle string into array of arrays', () => {
  const { rleString, size } = { size: { x: 3, y: 3 }, rleString: 'bo$2bo$3o!' };
  expect(
    decode(rleString, size).toEqual([
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ])
  );
});
