

/*---
esid: sec-sharedarraybuffer-length
description: >
  Returns an empty instance if length is absent
info: |
  SharedArrayBuffer( length )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).
  3. Return ? AllocateSharedArrayBuffer(NewTarget, byteLength).
features: [SharedArrayBuffer]
---*/

var buffer = new SharedArrayBuffer();

assert.sameValue(buffer.byteLength, 0);
