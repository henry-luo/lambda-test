

/*---
esid: sec-integer-indexed-exotic-objects-hasproperty-p
description: >
  Return boolean from Symbol properties
info: |
  9.4.5.2 [[HasProperty]](P)

  ...
  3. If Type(P) is String, then
    ...
  4. Return ? OrdinaryHasProperty(O, P).
includes: [testBigIntTypedArray.js]
features: [BigInt, Reflect, Symbol, TypedArray]
---*/

var s = Symbol("foo");

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  assert.sameValue(Reflect.has(sample, s), false);

  Object.defineProperty(sample, s, { value: 42 });

  assert.sameValue(Reflect.has(sample, s), true);
});
