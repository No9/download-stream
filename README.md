# download-stream

### Overview

Create simple download streams.

### Installation

Using __npm__:

```
$ npm install download-stream
```

### API

```javascript
var downloadStream = require('download-stream');

downloadStream('http://www.a-website.com/path/to/a/file.zip').pipe(toAWritableStream);
```
