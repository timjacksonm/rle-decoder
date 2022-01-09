const { fsparse, decode } = require('./index.js');

test('parse rle file to javascript object', () => {
  expect(fsparse('./file.rle')).toEqual({
    title: 'This is a glider.',
    size: { x: 3, y: 3 },
    array: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ],
  });
});
