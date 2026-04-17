

/*---
esid: sec-get-%typedarray%.prototype-@@tostringtag
description: >
  _TypedArray_.prototype[@@toStringTag] is inherited from %TypedArray%
  _TypedArray_.prototype has no own property @@toStringTag
includes: [testTypedArray.js]
features: [Symbol.toStringTag, TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(TA.prototype.hasOwnProperty(Symbol.toStringTag), false);
});
