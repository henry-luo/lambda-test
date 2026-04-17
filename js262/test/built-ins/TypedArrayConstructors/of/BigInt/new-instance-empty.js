

/*---
esid: sec-%typedarray%.of
description: >
  Return a new empty TypedArray
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var result = TA.of();
  assert.sameValue(result.length, 0);
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
});
