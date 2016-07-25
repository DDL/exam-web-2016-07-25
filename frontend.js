'use strict';

readDom.sendButton.addEventListener('click', sendText);

function sendText() {
  readRequest.httpRequest('POST', local , JSON.stringify({
    shift: readDom.shiftInput.value,
    text: readDom.textArea.value }),
  function (response) {
    readDom.ceaserCipher(response);
  });
}
