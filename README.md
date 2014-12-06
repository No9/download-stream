# download-stream [![Build Status](https://travis-ci.org/roryrjb/download-stream.svg?branch=master)](https://travis-ci.org/roryrjb/download-stream)

> Create simple download streams.

### Installation

```
$ npm install download-stream
```

__Test:__

```
$ npm test
```

### Usage/API

The module really just serves as a shortcut between the readable stream of Node's `http` module (when requesting a file) and the `fs` module's writable stream.

__Example:__

```javascript
var downloadStream = require('download-stream');

downloadStream('http://www.a-website.com/path/to/a/file.zip')
  .pipe(toAWritableStream);
```

### License

MIT
