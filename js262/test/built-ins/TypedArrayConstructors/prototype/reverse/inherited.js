

/*---
esid: sec-%typedarray%.prototype.reverse
description: >
  _TypedArray_.prototype has no own property "reverse"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("reverse"), false);
}, null, ["passthrough"]);
