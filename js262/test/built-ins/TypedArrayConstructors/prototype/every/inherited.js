

/*---
esid: sec-%typedarray%.prototype.every
description: >
  _TypedArray_.prototype has no own property "every"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("every"), false);
});
