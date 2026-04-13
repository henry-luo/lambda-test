

/*---
esid: sec-%typedarray%.prototype.sort
description: Returns the same instance
info: |
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  When the TypedArray SortCompare abstract operation is called with two
  arguments x and y, the following steps are taken:

  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([2n, 1n]);
  var result = sample.sort();

  assert.sameValue(sample, result, "without comparefn");

  result = sample.sort(function() { return 0; });
  assert.sameValue(sample, result, "with comparefn");
});
