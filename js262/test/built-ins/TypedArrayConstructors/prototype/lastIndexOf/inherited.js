

/*---
esid: sec-%typedarray%.prototype.lastindexof
description: >
  _TypedArray_.prototype has no own property "lastIndexOf"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("lastIndexOf"), false);
});
