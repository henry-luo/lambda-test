

/*---
esid: sec-uint8array.prototype.setfromhex
description: Uint8Array.prototype.setFromHex decodes and writes pairs which occur prior to bad data
includes: [compareArray.js]
features: [uint8array-base64, TypedArray]
---*/

var illegal = [
  'aaa ',
  'aaag',
];
illegal.forEach(function(value) {
  var target = new Uint8Array([255, 255, 255, 255, 255]);
  assert.throws(SyntaxError, function() {
    target.setFromHex(value);
  });
  assert.compareArray(target, [170, 255, 255, 255, 255], "decoding from " + value);
});

var target = new Uint8Array([255, 255, 255, 255, 255]);
assert.throws(SyntaxError, function() {
  target.setFromHex('aaa');
});
assert.compareArray(target, [255, 255, 255, 255, 255], "when length is odd no data is written");
