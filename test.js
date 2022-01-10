const { fileParse, decode } = require('./index.js');

test('parse rle file to javascript object', () => {
  expect(fileParse('./file.rle')).toEqual({
    description: ['This is a glider.'],
    size: { x: 3, y: 3 },
    rleString: 'bo$2bo$3o!',
  });
});
test('parse rle file to javascript object', () => {
  expect(fileParse('./60p72.rle')).toEqual({
    description: [
      'https://conwaylife.com/wiki/Two_blockers_hassling_R-pentomino',
      'https://conwaylife.com/patterns/60p72.rle',
    ],
    size: { x: 26, y: 20 },
    rleString:
      'o24bo$3o20b3o$3bo18bo$2b2o18b2o3$19bo$19b2o$9b2o9bo$8b2o9bo$8bo8bobo$9bo7bobo$5b2o11bo$5b2o3$7b2o8b2o$3b2obobo8bobob2o$3bob2obobo4bobob2obo$9b2o4b2o!',
  });
});

test('decode rle string into array of arrays', () => {
  const { rleString, size } = { size: { x: 3, y: 3 }, rleString: 'bo$2bo$3o!' };
  expect(decode(rleString, size)).toEqual([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ]);
});

test('decode rle string into array of arrays', () => {
  const { rleString, size } = {
    size: { x: 26, y: 20 },
    rleString:
      'o24bo$3o20b3o$3bo18bo$2b2o18b2o3$19bo$19b2o$9b2o9bo$8b2o9bo$8bo8bobo$9bo7bobo$5b2o11bo$5b2o3$7b2o8b2o$3b2obobo8bobob2o$3bob2obobo4bobob2obo$9b2o4b2o!',
  };
  expect(decode(rleString, size)).toEqual([
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1,
    ],
    [
      1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
      1,
    ],
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
      0,
    ],
    [
      0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
  ]);
});
