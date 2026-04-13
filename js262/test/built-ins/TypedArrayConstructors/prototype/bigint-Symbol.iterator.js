

/*---
esid: sec-%typedarray%.prototype-@@iterator
description: >
  _TypedArray_.prototype has no own property @@iterator
includes: [testBigIntTypedArray.js]
features: [BigInt, Symbol.iterator, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty(Symbol.iterator), false);
});
