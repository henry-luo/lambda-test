

/*---
esid: sec-%typedarray%.prototype.foreach
description: >
  _TypedArray_.prototype has no own property "forEach"
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("forEach"), false);
});
