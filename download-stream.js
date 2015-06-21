'use strict'

module.exports = function (url) {
  var protocol = url.match(/^https:\/\//i) ? require('https') : require('http')
  var options = require('url').parse(url)
  var target
  options.headers = {'User-Agent': 'node/' + process.version}
  protocol.get(options, function (response) {
    response.pipe(target)
  })
  return {
    pipe: function (writableStream) {
      target = writableStream
    }
  }
}
