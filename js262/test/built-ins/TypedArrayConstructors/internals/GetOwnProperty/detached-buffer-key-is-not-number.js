

/*---
esid: sec-integer-indexed-exotic-objects-getownproperty-p
description: >
  Does not throw on an instance with a detached buffer if key is not a number
info: |
  9.4.5.1 [[GetOwnProperty]] ( P )

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
  4. Return OrdinaryGetOwnProperty(O, P).
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 43]);
  $DETACHBUFFER(sample.buffer);

  assert.sameValue(
    Object.getOwnPropertyDescriptor(sample, "undef"),
    undefined,
    "undefined property"
  );

  
  Object.defineProperty(sample, "foo", { value: "bar" });
  assert.sameValue(
    Object.getOwnPropertyDescriptor(sample, "foo").value,
    "bar",
    "return value from a String key"
  );
});
