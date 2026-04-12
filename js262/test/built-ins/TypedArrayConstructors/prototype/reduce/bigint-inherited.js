

/*---
esid: sec-get-%typedarray%.prototype.reduce
description: >
  _TypedArray_.prototype has no own property "reduce"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("reduce"), false);
}, null, ["passthrough"]);
