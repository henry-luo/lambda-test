

/*---
esid: sec-get-arraybuffer.prototype.detached
description: Returns true if the buffer is detached, else false
info: |
  get ArrayBuffer.prototype.detached

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  3. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
  4. Return IsDetachedBuffer(O).

features: [ArrayBuffer, arraybuffer-transfer]
---*/

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.detached;
});
