

/*---
esid: sec-%typedarray%.prototype.tostring
description: >
  _TypedArray_.prototype has no own property "toString"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("toString"), false);
}, null, ["passthrough"]);
