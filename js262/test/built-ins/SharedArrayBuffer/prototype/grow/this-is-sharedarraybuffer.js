

/*---
esid: sec-sharedarraybuffer.prototype.grow
description: Throws a TypeError if `this` value is an ArrayBuffer
info: |
  SharedArrayBuffer.prototype.grow ( newLength )

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferMaxByteLength]]).
  3. If IsSharedArrayBuffer(O) is false, throw a TypeError exception.
  [...]
features: [ArrayBuffer, SharedArrayBuffer, resizable-arraybuffer]
---*/

var ab = new ArrayBuffer(0);

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.grow.call(ab);
}, '`this` value cannot be an ArrayBuffer');
