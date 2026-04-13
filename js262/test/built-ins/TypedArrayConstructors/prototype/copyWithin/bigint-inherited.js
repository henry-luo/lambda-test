

/*---
esid: sec-%typedarray%.prototype.copywithin
description: >
  _TypedArray_.prototype has no own property "copyWithin"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("copyWithin"), false);
});
