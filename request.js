'use strict';

var local = 'http://localhost:3012/decode/';

var readRequest = (function () {
  function httpRequest(method, url, data, callback) {
    readDom.notLoadedYet();
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
        readDom.loaded();
        callback(xhr.response);
      }
    };
    xhr.send(data);
  }
  return {
    httpRequest: httpRequest
  };
})();
