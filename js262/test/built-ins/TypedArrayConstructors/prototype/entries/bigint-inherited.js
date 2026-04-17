

/*---
esid: sec-%typedarray%.prototype.entries
description: >
  _TypedArray_.prototype has no own property "entries"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("entries"), false);
});
