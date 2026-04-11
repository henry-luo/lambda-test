

/*---
esid: sec-uint8array.prototype.setfrombase64
description: Uint8Array.prototype.setFromBase64 throws a SyntaxError when input has non-base64, non-ascii-whitespace characters
features: [uint8array-base64, TypedArray]
---*/

var illegal = [
  'Zm.9v',
  'Zm9v^',
  'Zg==&',
  'Z−==', 
  'Z＋==', 
  'Zg\u00A0==', 
  'Zg\u2009==', 
  'Zg\u2028==', 
];
illegal.forEach(function(value) {
  assert.throws(SyntaxError, function() {
    var target = new Uint8Array([255, 255, 255, 255, 255]);
    target.setFromBase64(value);
  });
});
