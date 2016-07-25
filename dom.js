'use strict';

var readDom = (function () {
  var textArea = document.querySelector('.textarea');
  var shiftInput = document.querySelector('.shiftInput');
  var sendButton = document.querySelector('.send');
  var displayP = document.querySelector('.displayP');
  var loading = document.querySelector('.loading')

  function ceaserCipher(response) {
    var result = JSON.parse(response);
    console.log(result);

    if (result.status === 'ok') {
      displayP.innerHTML = result.text;
    } else {
      displayP.innerHTML = result.error;
        alert('Shift is out of bound');
    }
  }

  function notLoadedYet() {
    document.querySelector('.loading').style.display = "block";
  }

  function loaded() {
    document.querySelector('.loading').style.display = "none";
  }

  return {
    textArea : textArea,
    shiftInput : shiftInput,
    sendButton : sendButton,
    ceaserCipher : ceaserCipher,
    notLoadedYet : notLoadedYet,
    loaded : loaded
  };
})();
