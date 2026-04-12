

/*---
esid: sec-arraybuffer.prototype.resize
description: >
  Throws a TypeError if `this` has an [[ArrayBufferIsImmutable]] internal slot.
info: |
  ArrayBuffer.prototype.resize ( newLength )
  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferMaxByteLength]]).
  ...
  6. Assert: IsImmutableBuffer(O) is false.
features: [resizable-arraybuffer, immutable-arraybuffer]
includes: [compareArray.js]
---*/

var calls = [];

var ab = (new ArrayBuffer(4)).transferToImmutable();
assert.throws(TypeError, function() {
  ab.resize(0);
});
assert.throws(TypeError, function() {
  ab.resize({
    valueOf() {
      calls.push('newLength.valueOf');
      return 0;
    }
  });
});
assert.compareArray(calls, [], 'Must verify internal slots before reading newLength.');
