

/*---
esid: sec-get-%typedarray%.prototype.bytelength
description: >
  _TypedArray_.prototype has no own property "byteLength"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("byteLength"), false);
}, null, ["passthrough"]);
