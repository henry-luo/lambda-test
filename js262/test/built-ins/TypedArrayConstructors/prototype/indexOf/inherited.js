

/*---
esid: sec-%typedarray%.prototype.indexof
description: >
  _TypedArray_.prototype has no own property "indexOf"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("indexOf"), false);
}, null, ["passthrough"]);
