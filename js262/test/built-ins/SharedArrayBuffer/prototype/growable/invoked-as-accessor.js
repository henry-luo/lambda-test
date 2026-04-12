

/*---
esid: sec-get-sharedarraybuffer.prototype.growable
description: Requires this value to have a [[ArrayBufferData]] internal slot
info: |
  get SharedArrayBuffer.prototype.growable

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  [...]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.growable;
});
