

/*---
esid: sec-typedarray-length
description: >
  Throws a RangeError if length is a Infinity value
info: |
  22.2.4.2 TypedArray ( length )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is not Object.

  ...
  4. Let numberLength be ? ToNumber(length).
  5. Let elementLength be ToLength(numberLength).
  6. If SameValueZero(numberLength, elementLength) is false, throw a RangeError
  exception.
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.throws(RangeError, function() {
    new TA(Infinity);
  });
});
