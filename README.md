# rle-decoder

Decode Run-length encoding strings or parse an entire .rle file into a JavaScript object.

I created this package in parallel with my Conway's Game of Life project. I needed a way to read patterns in .rle files provided by The <a href="https://www.conwaylife.com/wiki/Main_Page">Life</a> Wiki.

## Installing

```bash
npm install rle-decoder
```

## CLI Usage:

This package exports two functions

`decode` used to decode an rle string.

`fileParse` used to parse a .rle file into a readable JavaScript object.

## API Usage:

```javascript
var { decode, fileParse } = require('rle-decoder');
```

Gives you the following functions:

```javascript
decode(string, gridsize);
```
The first arguement 'string' you need to provide the rle string.

The second arguement 'gridsize' requires an object in this format `{ x: num, y: num }`


```javascript
fileParse(filepath);
```

The argument 'filepath' requires the .rle file path in your directory as a string.

for example `fileParse('./file.rle')`

All arguments for both functions are required.

## Release

-v 0.0.1

This package may contain bugs and isn't fully released until version 1.0.0.

If you would like to add to this package please submit an issue or pull request.
Thank you
