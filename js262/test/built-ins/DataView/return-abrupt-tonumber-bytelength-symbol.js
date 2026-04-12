

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return abrupt from ToLength(symbol byteLength)
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  10. If byteLength is undefined, then
    a. Let viewByteLength be bufferByteLength - offset.
  11. Else,
    a. Let viewByteLength be ? ToLength(byteLength).
  ...
features: [Symbol]
---*/

var buffer = new ArrayBuffer(8);
var s = Symbol("1");

assert.throws(TypeError, function() {
  new DataView(buffer, 0, s);
});
