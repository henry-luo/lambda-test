

/*---
esid: sec-%typedarray%.prototype.subarray
description: >
  _TypedArray_.prototype has no own property "subarray"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("subarray"), false);
});
