

/*---
esid: sec-get-%typedarray%.prototype.length
description: >
  _TypedArray_.prototype has no own property "length"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("length"), false);
});
