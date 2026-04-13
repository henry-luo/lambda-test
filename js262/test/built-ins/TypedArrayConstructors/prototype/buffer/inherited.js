

/*---
esid: sec-get-%typedarray%.prototype.buffer
description: >
  _TypedArray_.prototype has no own property "buffer"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("buffer"), false);
});
