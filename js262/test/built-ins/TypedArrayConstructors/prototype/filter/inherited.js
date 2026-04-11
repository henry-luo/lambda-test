

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  _TypedArray_.prototype has no own property "filter"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("filter"), false);
}, null, ["passthrough"]);
