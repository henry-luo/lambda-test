

/*---
esid: sec-%typedarray%.prototype.map
description: >
  _TypedArray_.prototype has no own property "map"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("map"), false);
});
