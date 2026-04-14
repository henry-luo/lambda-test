

/*---
esid: sec-get-%typedarray%.prototype.buffer
description: >
  _TypedArray_.prototype has no own property "buffer"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("buffer"), false);
});
