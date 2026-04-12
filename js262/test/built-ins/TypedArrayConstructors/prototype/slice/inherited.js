

/*---
esid: sec-%typedarray%.prototype.slice
description: >
  _TypedArray_.prototype has no own property "slice"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("slice"), false);
}, null, ["passthrough"]);
