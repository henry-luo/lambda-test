

/*---
esid: sec-%typedarray%.prototype.values
description: >
    _TypedArray_.prototype has no own property "values"
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty("values"), false);
}, null, ["passthrough"]);
