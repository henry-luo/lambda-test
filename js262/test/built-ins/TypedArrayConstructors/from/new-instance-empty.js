

/*---
esid: sec-%typedarray%.from
description: >
  Return a new empty TypedArray
includes: [testTypedArray.js]
features: [TypedArray]
---*/


testWithTypedArrayConstructors(function(TA) {
  var result = TA.from([]);
  assert.sameValue(result.length, 0);
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
}, null, ["passthrough"]);
