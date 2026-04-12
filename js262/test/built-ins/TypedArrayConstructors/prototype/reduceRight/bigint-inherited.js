

/*---
esid: sec-%typedarray%.prototype.reduceright
description: >
  _TypedArray_.prototype has no own property "reduceRight"
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("reduceRight"), false);
}, null, ["passthrough"]);
