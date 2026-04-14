

/*---
esid: sec-%typedarray%.prototype.indexof
description: >
  _TypedArray_.prototype has no own property "indexOf"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("indexOf"), false);
});
