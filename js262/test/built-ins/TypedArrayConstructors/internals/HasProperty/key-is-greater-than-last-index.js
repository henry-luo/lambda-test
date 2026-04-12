

/*---
esid: sec-integer-indexed-exotic-objects-hasproperty-p
description: Return false if P's value is >= this's [[ArrayLength]]
info: |
  9.4.5.2 [[HasProperty]](P)

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      iii. If ! IsValidIntegerIndex(O, numericIndex) is false, return false.
  ...
includes: [testTypedArray.js]
features: [align-detached-buffer-semantics-with-web-reality, Reflect, TypedArray]
---*/


TypedArray.prototype[1] = "test262";

testWithTypedArrayConstructors(function(TA, makeCtorArg) {
  var sample = new TA(makeCtorArg(1));

  assert.sameValue(Reflect.has(sample, "1"), false, 'Reflect.has(sample, "1") must return false');
});
