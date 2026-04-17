

/*---
esid: sec-%typedarray%.prototype.map
description: >
  _TypedArray_.prototype has no own property "map"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("map"), false);
});
