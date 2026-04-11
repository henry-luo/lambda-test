

/*---
esid: sec-arraybuffer.prototype.transfertofixedlength
description: >
  Throws a TypeError if `this` does not have an [[ArrayBufferData]] internal slot.
info: |
  ArrayBuffer.prototype.transferToFixedLength ( [ newLength ] )

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  3. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
  4. If IsDetachedBuffer(O) is true, throw a TypeError exception.
  [...]
includes: [detachArrayBuffer.js]
features: [arraybuffer-transfer]
---*/

assert.sameValue(typeof ArrayBuffer.prototype.transferToFixedLength, 'function');

var ab = new ArrayBuffer(1);

$DETACHBUFFER(ab);

assert.throws(TypeError, function() {
  ab.transferToFixedLength();
});
