

/*---
esid: sec-%typedarray%.prototype.set
description: >
  _TypedArray_.prototype has no own property "set"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("set"), false);
});
