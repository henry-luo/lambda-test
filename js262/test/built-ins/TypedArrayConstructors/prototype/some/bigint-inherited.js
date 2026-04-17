

/*---
esid: sec-%typedarray%.prototype.some
description: >
  _TypedArray_.prototype has no own property "some"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("some"), false);
});
