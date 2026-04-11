

/*---
esid: sec-get-arraybuffer.prototype.bytelength
description: Requires this value to have a [[ArrayBufferData]] internal slot
info: |
  24.1.4.1 get ArrayBuffer.prototype.byteLength

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.byteLength;
});
