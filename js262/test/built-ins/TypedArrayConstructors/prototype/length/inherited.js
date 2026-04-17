

/*---
esid: sec-get-%typedarray%.prototype.length
description: >
  _TypedArray_.prototype has no own property "length"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("length"), false);
});
