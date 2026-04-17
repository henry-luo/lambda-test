

/*---
esid: sec-%typedarray%.prototype.tostring
description: >
  _TypedArray_.prototype has no own property "toString"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("toString"), false);
});
