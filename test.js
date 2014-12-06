'use strict';

var assert = require('assert');
var downloadStream = require('./download-stream');
var fs = require('fs');

downloadStream('http://nodejs.org/dist/v0.10.28/node-v0.10.28-x86.msi')
  .pipe(fs.createWriteStream('node-v0.10.28-x86.msi'));

setTimeout(function () {
  assert.equal(fs.existsSync('./node-v0.10.28-x86.msi'), true);
}, 10000);

