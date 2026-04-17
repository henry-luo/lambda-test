

/*---
esid: sec-%typedarray%.prototype.copywithin
description: >
  _TypedArray_.prototype has no own property "copyWithin"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("copyWithin"), false);
});
