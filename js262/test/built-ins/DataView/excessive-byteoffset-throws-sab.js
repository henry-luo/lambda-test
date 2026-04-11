

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Throws a RangeError if offset > bufferByteLength
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  8. Let bufferByteLength be the value of buffer's [[ArrayBufferByteLength]]
  internal slot.
  9. If offset > bufferByteLength, throw a RangeError exception.
  ...
features: [SharedArrayBuffer]
---*/

var ab = new SharedArrayBuffer(1);

assert.throws(RangeError, function() {
  new DataView(ab, 2);
}, "2");

assert.throws(RangeError, function() {
  new DataView(ab, Infinity);
}, "Infinity");
