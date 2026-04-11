

/*---
esid: sec-arraybuffer.prototype.resize
description: Behavior when attempting to shrink a resizable array buffer
info: |
  ArrayBuffer.prototype.resize ( newLength )

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferMaxByteLength]]).
  3. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
  4. If IsDetachedBuffer(O) is true, throw a TypeError exception.
  5. Let newByteLength be ? ToIntegerOrInfinity(newLength).
  6. If newByteLength < 0 or newByteLength > O.[[ArrayBufferMaxByteLength]],
     throw a RangeError exception.
  7. Let hostHandled be ? HostResizeArrayBuffer(O, newByteLength).
  [...]

  HostResizeArrayBuffer ( buffer, newByteLength )

  The implementation of HostResizeArrayBuffer must conform to the following
  requirements:

  - The abstract operation does not detach buffer.
  - The abstract operation may complete normally or abruptly.
  - If the abstract operation completes normally with handled,
    buffer.[[ArrayBufferByteLength]] is newByteLength.
  - The return value is either handled or unhandled.
features: [resizable-arraybuffer]
---*/

var ab = new ArrayBuffer(4, {maxByteLength: 4});
var caught = false;
var result;


assert.sameValue(typeof ab.resize, 'function');

try {
  result = ab.resize(3);
} catch (_) {
  caught = true;
}

try {
  ab.slice();
} catch (_) {
  throw new Test262Error('The ArrayBuffer under test was detached');
}


assert(caught || ab.byteLength === 3, 'byteLength');


assert.sameValue(result, undefined, 'normal completion value');

