'use strict'

var assert = require('assert')
var md5File = require('md5-file')
var downloadStream = require('./download-stream')
var fs = require('fs')
var checksum = 'aca4c946d9a54acdb042446ebaf7a348'

downloadStream('http://nodejs.org/dist/v0.10.28/node-v0.10.28-x86.msi')
  .pipe(fs.createWriteStream('node-v0.10.28-x86.msi'))

setTimeout(function () {
  assert(fs.existsSync('./node-v0.10.28-x86.msi') === true)
  assert(checksum === md5File('./node-v0.10.28-x86.msi'))
}, 10000)
