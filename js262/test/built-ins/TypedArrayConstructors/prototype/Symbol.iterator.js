

/*---
esid: sec-%typedarray%.prototype-@@iterator
description: >
  _TypedArray_.prototype has no own property @@iterator
includes: [testTypedArray.js]
features: [Symbol.iterator, TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty(Symbol.iterator), false);
});
