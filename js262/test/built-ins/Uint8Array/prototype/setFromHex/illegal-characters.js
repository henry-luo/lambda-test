

/*---
esid: sec-uint8array.prototype.setfromhex
description: Uint8Array.prototype.setFromHex throws a SyntaxError when input has non-hex characters
features: [uint8array-base64, TypedArray]
---*/

var illegal = [
  'a.a',
  'aa^',
  'a a',
  'a\ta',
  'a\x0Aa',
  'a\x0Ca',
  'a\x0Da',
  'a\u00A0a', 
  'a\u2009a', 
  'a\u2028a', 
];
illegal.forEach(function(value) {
  assert.throws(SyntaxError, function() {
    var target = new Uint8Array([255, 255, 255, 255, 255]);
    target.setFromHex(value);
  });
});
