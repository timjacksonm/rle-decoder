# rle-decoder

Decode rle strings or parse an entire .rle file into a JavaScript object.

## Installing

```bash
npm install rle-decoder
```

## CLI Usage:

See `man touch`

This package exports two functions
`decode` used to decode an rle string.
`fileParse` used to parse a .rle file into a readable JavaScript object.

## API Usage:

```javascript
var { decode, fileParse } = require('rle-decoder');
```

Gives you the following functions:

- `decode(rlestring, gridsize)`

\*`gridsize` requires an object in this format `{ x: num, y: num }` which is used to create the specified 2d array.

- `fileParse(filepath)`

For now to parse a .rle file you need to provide the files path in your directory.

All arguments are required.

## Release

-v 0.0.1

This package may contain bugs and isn't fully released until version 1.0.0.
If you would like to add to this package or help submit an issue and pull request.
Thank you
