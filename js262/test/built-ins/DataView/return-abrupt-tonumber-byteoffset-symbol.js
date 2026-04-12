

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return abrupt from ToNumber(symbol byteOffset)
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  4. Let numberOffset be ? ToNumber(byteOffset).
  ...
features: [Symbol]
---*/

var s = Symbol("1");
var ab = new ArrayBuffer(0);

assert.throws(TypeError, function() {
  new DataView(ab, s);
});
