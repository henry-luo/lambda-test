

/*---
esid: sec-get-sharedarraybuffer.prototype.maxbytelength
description: Throws a TypeError exception when invoked as a function
info: |
  get SharedArrayBuffer.prototype.maxByteLength

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  [...]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, 'maxByteLength'
).get;

assert.sameValue(typeof getter, 'function');

assert.throws(TypeError, function() {
  getter();
});
