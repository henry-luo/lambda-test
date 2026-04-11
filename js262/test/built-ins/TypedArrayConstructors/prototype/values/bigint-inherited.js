

/*---
esid: sec-%typedarray%.prototype.values
description: >
    _TypedArray_.prototype has no own property "values"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("values"), false);
}, null, ["passthrough"]);
