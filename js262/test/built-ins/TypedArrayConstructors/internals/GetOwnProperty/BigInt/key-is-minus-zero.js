

/*---
esid: sec-integer-indexed-exotic-objects-getownproperty-p
description: Returns undefined when P is -0.
info: |
  9.4.5.1 [[GetOwnProperty]] ( P )

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      i. Let value be ? IntegerIndexedElementGet(O, numericIndex).
      ii. If value is undefined, return undefined.
  ...

  7.1.16 CanonicalNumericIndexString ( argument )

  ...
  2. If argument is "-0", return -0.
  ...

  9.4.5.8 IntegerIndexedElementGet ( O, index )

  ...
  6. If index = -0, return undefined.
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([42n]);

  
  assert.sameValue(Object.getOwnPropertyDescriptor(sample, "-0"), undefined);
});
