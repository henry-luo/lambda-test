

/*---
esid: sec-%typedarray%.prototype.entries
description: >
  _TypedArray_.prototype has no own property "entries"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("entries"), false);
});
