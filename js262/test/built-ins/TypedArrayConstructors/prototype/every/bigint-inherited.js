

/*---
esid: sec-%typedarray%.prototype.every
description: >
  _TypedArray_.prototype has no own property "every"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("every"), false);
});
