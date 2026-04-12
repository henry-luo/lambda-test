

/*---
esid: sec-%typedarray%.prototype.findindex
description: >
  _TypedArray_.prototype has no own property "findIndex"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("findIndex"), false);
}, null, ["passthrough"]);
