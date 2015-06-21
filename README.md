# download-stream [![Build Status](https://travis-ci.org/roryrjb/download-stream.svg?branch=master)](https://travis-ci.org/roryrjb/download-stream) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Ultra-simple download stream creation.

### Installation

```
$ npm install download-stream
```

__Test:__

```
$ npm test
```

### Usage/API

__Example:__

```javascript
var downloadStream = require('download-stream')

downloadStream('http://www.a-website.com/path/to/a/file.zip')
  .pipe(toAWritableStream)
```

### License

MIT
