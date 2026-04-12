

/*---
esid: sec-get-sharedarraybuffer.prototype.growable
description: Throws a TypeError exception when invoked as a function
info: |
  get SharedArrayBuffer.prototype.growable

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  [...]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, 'growable'
).get;

assert.sameValue(typeof getter, 'function');

assert.throws(TypeError, function() {
  getter();
});
