

/*---
esid: sec-%typedarray%.prototype.find
description: >
  _TypedArray_.prototype has no own property "find"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("find"), false);
});
