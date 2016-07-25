'use strict';

var tape = require('tape');
var decrypt = require('./decrypt');


tape('Valid string, positive shift', function (t) {
  t.deepEqual(decrypt.ceaserCipherBE(3, 'oruhp lsvxp groru vlw'), 'lorem ipsum dolor sit');
  t.end();
});

tape('Valid string, negativ shift', function (t) {
  t.deepEqual(decrypt.ceaserCipherBE(-3, 'lorem ipsum dolor sit'), 'oruhp lsvxp groru vlw');
  t.end();
});

tape('without shift', function (t) {
  t.deepEqual(decrypt.ceaserCipherBE(0, 'lorem ipsum dolor sit'), 'lorem ipsum dolor sit');
  t.end();
});

tape('special characters', function (t) {
  t.deepEqual(decrypt.ceaserCipherBE( 2, '&@!%/=()€đĐ[]$ß¤<>#&@{}'), '&@!%/=()€đĐ[]$ß¤<>#&@{}');
  t.end();
});
