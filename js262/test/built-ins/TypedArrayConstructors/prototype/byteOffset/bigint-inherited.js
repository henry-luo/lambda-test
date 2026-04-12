

/*---
esid: sec-get-%typedarray%.prototype.byteoffset
description: >
  _TypedArray_.prototype has no own property "byteOffset"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("byteOffset"), false);
}, null, ["passthrough"]);
