# rle-decoder

**Note: this decoder will only convert rle strings into two-dimensional arrays.**

Decode Run-length encoding strings or parse an entire .rle file into a JavaScript object.

I created this package in parallel with my Conway's Game of Life project. I needed a way to read patterns in .rle files provided by The <a href="https://www.conwaylife.com/wiki/Main_Page">Life</a> Wiki.

## Installing

```bash
npm install rle-decoder
```

## Usage:

This package exports two functions.

```javascript
var { decode, parseFile } = require('rle-decoder');
```

`decode` used to convert a run-length encoded string into a two-dimensional array.

`parseFile` used to parse a .rle extension file into a readable JavaScript object.

## API:

```javascript
decode(string, gridsize);
```

The first arguement 'string' you need to provide the rle string.

The second arguement 'gridsize' requires an object in this format `{ x: num, y: num }`

will return a two-demensional array i.e.

```javascript
[
  [0, 0, 0],
  [0, 0, 1],
  [1, 1, 1],
];
```

---

```javascript
parseFile(filepath);
```

The argument 'filepath' requires the .rle file path in your directory as a string.

for example `parseFile('./file.rle')`

will return this JavaScript Object

```javascript
{ title: String, author: String, description: Array || String, size: Object, rleString: String, }
```

All arguments for both functions are required.

## Release

-v 1.0.0 first release version with updated readme.

If you would like to add to this package please submit an issue or pull request.
Thank you
