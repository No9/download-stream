'use strict';

function downloadStream(url) {

  var protocol = require('http');
  var target;
  var options = {};
  options = require('url').parse(url);
  options.headers = {'User-Agent': 'node/' + process.version};

  if (url.match('https://')) {
    protocol = require('https');
  }

  protocol.get(options, function (response) {
    response.pipe(target);
  });

  return {
    pipe: function (writableStream) {
      target = writableStream;
    }
  };

}

module.exports = downloadStream;

