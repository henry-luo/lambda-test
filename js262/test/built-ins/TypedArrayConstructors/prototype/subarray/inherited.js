

/*---
esid: sec-%typedarray%.prototype.subarray
description: >
  _TypedArray_.prototype has no own property "subarray"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("subarray"), false);
});
