

/*---
esid: sec-%typedarray%.prototype.fill
description: >
  _TypedArray_.prototype has no own property "fill"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("fill"), false);
});
