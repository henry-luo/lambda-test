

/*---
esid: sec-%typedarray%.prototype.keys
description: >
  _TypedArray_.prototype has no own property "keys"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("keys"), false);
});
