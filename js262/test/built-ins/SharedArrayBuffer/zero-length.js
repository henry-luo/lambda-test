

/*---
esid: sec-sharedarraybuffer-length
description: >
  The `length` parameter can be zero.
info: |
  SharedArrayBuffer( length )

  ...
  2. Let numberLength be ToNumber(length).
  3. Let byteLength be ToLength(numberLength).
  4. ReturnIfAbrupt(byteLength).
  5. If SameValueZero(numberLength, byteLength) is false, throw a RangeError exception.
  ...
features: [SharedArrayBuffer]
---*/

var positiveZero = new SharedArrayBuffer(+0);
assert.sameValue(positiveZero.byteLength, 0);

var negativeZero = new SharedArrayBuffer(-0);
assert.sameValue(negativeZero.byteLength, 0);
