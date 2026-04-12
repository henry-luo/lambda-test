

/*---
esid: sec-%typedarray%.prototype.set
description: >
  _TypedArray_.prototype has no own property "set"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("set"), false);
}, null, ["passthrough"]);
