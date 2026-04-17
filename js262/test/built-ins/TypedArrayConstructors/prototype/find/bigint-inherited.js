

/*---
esid: sec-%typedarray%.prototype.find
description: >
  _TypedArray_.prototype has no own property "find"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("find"), false);
});
