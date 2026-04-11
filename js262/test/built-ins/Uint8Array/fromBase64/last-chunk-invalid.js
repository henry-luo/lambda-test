

/*---
esid: sec-uint8array.frombase64
description: Uint8Array.fromBase64 throws a SyntaxError when chunk size is invalid or padding is invalid
features: [uint8array-base64, TypedArray]
includes: [compareArray.js]
---*/


assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('A');
});
assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('A', { lastChunkHandling: 'loose' });
});
assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('A', { lastChunkHandling: 'strict' });
});
assert.compareArray(Uint8Array.fromBase64('A', { lastChunkHandling: 'stop-before-partial' }), []);


assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('ABCDA');
});
assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('ABCDA', { lastChunkHandling: 'loose' });
});
assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('ABCDA', { lastChunkHandling: 'strict' });
});
assert.compareArray(Uint8Array.fromBase64('ABCDA', { lastChunkHandling: 'stop-before-partial' }), [0, 16, 131]);


assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('AA=');
});
assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('AA=', { lastChunkHandling: 'loose' });
});
assert.throws(SyntaxError, function() {
  Uint8Array.fromBase64('AA=', { lastChunkHandling: 'strict' });
});
assert.compareArray(Uint8Array.fromBase64('AA=', { lastChunkHandling: 'stop-before-partial' }), []);
assert.compareArray(Uint8Array.fromBase64('aQ=', { lastChunkHandling: 'stop-before-partial' }), []);
assert.compareArray(Uint8Array.fromBase64('ABCDAA=', { lastChunkHandling: 'stop-before-partial' }), [0, 16, 131]);


var illegal = [
  '=',
  '==',
  '===',
  '====',
  '=====',
  'A=',
  'A==',
  'A===',
  'A====',
  'A=====',
  'AA====',
  'AA=====',
  'AAA==',
  'AAA===',
  'AAA====',
  'AAA=====',
  'AAAA=',
  'AAAA==',
  'AAAA===',
  'AAAA====',
  'AAAA=====',
  'AAAAA=',
  'AAAAA==',
  'AAAAA===',
  'AAAAA====',
  'AAAAA=====',
];

illegal.forEach(function(value) {
  assert.throws(SyntaxError, function() {
    Uint8Array.fromBase64(value);
  });
  assert.throws(SyntaxError, function() {
    Uint8Array.fromBase64(value, { lastChunkHandling: 'loose' });
  });
  assert.throws(SyntaxError, function() {
    Uint8Array.fromBase64(value, { lastChunkHandling: 'strict' });
  });
  assert.throws(SyntaxError, function() {
    Uint8Array.fromBase64(value, { lastChunkHandling: 'stop-before-partial' });
  });
});
