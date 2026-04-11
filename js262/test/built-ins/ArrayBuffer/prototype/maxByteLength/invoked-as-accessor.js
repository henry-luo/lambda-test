

/*---
esid: sec-get-arraybuffer.prototype.maxbytelength
description: Requires this value to have a [[ArrayBufferData]] internal slot
info: |
  get ArrayBuffer.prototype.maxByteLength

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  [...]
features: [resizable-arraybuffer]
---*/

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.maxByteLength;
});
