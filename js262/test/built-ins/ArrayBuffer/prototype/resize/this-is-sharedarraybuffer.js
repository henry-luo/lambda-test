

/*---
esid: sec-arraybuffer.prototype.resize
description: Throws a TypeError if `this` value is a SharedArrayBuffer
info: |
  ArrayBuffer.prototype.resize ( newLength )

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferMaxByteLength]]).
  3. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
  [...]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

var sab = new SharedArrayBuffer(0);

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.resize.call(sab);
}, '`this` value cannot be a SharedArrayBuffer');
