

/*---
esid: sec-sharedarraybuffer.prototype.grow
description: >
  Behavior when attempting to grow a growable array buffer to a smaller size
info: |
  SharedArrayBuffer.prototype.grow ( newLength )

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferMaxByteLength]]).
  3. If IsSharedArrayBuffer(O) is false throw a TypeError exception.
  4. Let newByteLength be ? ToIntegerOrInfinity(newLength).
  5. Let hostHandled be ? HostGrowSharedArrayBuffer(O, newByteLength).
  6. If hostHandled is handled, return undefined.
  [...]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

var sab = new SharedArrayBuffer(4, {maxByteLength: 5});
var result;


assert.sameValue(typeof sab.grow, 'function');

try {
  result = ab.grow(3);
} catch (_) {}


assert.sameValue(result, undefined, 'normal completion value');

