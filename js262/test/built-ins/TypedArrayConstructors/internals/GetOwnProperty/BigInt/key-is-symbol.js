

/*---
esid: sec-integer-indexed-exotic-objects-getownproperty-p
description: >
  Returns an ordinary property value if key is a Symbol
info: |
  9.4.5.1 [[GetOwnProperty]] ( P )

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
  4. Return OrdinaryGetOwnProperty(O, P).
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, Symbol, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([42n, 43n]);

  var s = Symbol("foo");
  Object.defineProperty(sample, s, { value: "baz" });
  assert.sameValue(
    Object.getOwnPropertyDescriptor(sample, s).value,
    "baz",
    "return value from a Symbol key"
  );
});
