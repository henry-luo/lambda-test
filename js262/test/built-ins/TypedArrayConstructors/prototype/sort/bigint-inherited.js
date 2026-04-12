

/*---
esid: sec-%typedarray%.prototype.sort
description: >
  _TypedArray_.prototype has no own property "sort"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("sort"), false);
}, null, ["passthrough"]);
