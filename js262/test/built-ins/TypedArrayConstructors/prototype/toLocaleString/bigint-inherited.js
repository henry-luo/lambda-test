

/*---
esid: sec-%typedarray%.prototype.tolocalestring
description: >
  _TypedArray_.prototype has no own property "toLocaleString"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("toLocaleString"), false);
}, null, ["passthrough"]);
