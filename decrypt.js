var decrypt = (function() {
  function decode(shift, text,  callback) {
    var decodedtext = ceaserCipherBE(shift, text);
    if (shift >= -25 && shift <= 25 && text !== '' && shift !== '') {
      callback(null, {
        'status': 'ok',
        'text': decodedtext
      });
    } else {
      callback({
        'status': 'error',
        'error': 'Shift is out of bound'
      });
    }
  }

  function ceaserCipherBE(shift, text) {
    if(shift >= -25 && shift <= 25 && text !== '' && shift !== ''){
      var result = '';
      for (var i = 0; i < text.length; i ++) {
        var char = text[i];
        if (char.match(/[a-zA-Z]/)) {
          var code = text.charCodeAt(i);
          if ((code >= 65) && (code <= 90)) {
            char = String.fromCharCode(((code - 65 - shift % 26 ) + 26) % 26 + 65);}
          else if ((code >= 97) && (code <= 122)) {
            char = String.fromCharCode(((code - 97 - shift % 26 ) + 26) % 26 + 97);
          }
        }
        result += char;
      }
      return result
    }
  }
  return {
    decode: decode,
    ceaserCipherBE: ceaserCipherBE
  }
})()

module.exports = decrypt;
