

/*---
esid: sec-%typedarray%.prototype.join
description: >
  _TypedArray_.prototype has no own property "join"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("join"), false);
});
