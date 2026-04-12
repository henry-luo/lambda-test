

/*---
esid: sec-%typedarray%.prototype.fill
description: >
  _TypedArray_.prototype has no own property "fill"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("fill"), false);
}, null, ["passthrough"]);
