

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  _TypedArray_.prototype has no own property "filter"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("filter"), false);
}, null, ["passthrough"]);
