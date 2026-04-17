

/*---
esid: sec-%typedarray%.prototype.subarray
description: Subarray result does not import own property
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([41, 42, 43, 44]);
  var result;

  sample.foo = 42;

  result = sample.subarray(0);
  assert.sameValue(
    result.hasOwnProperty("foo"),
    false,
    "does not import own property"
  );
});
