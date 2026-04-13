

/*---
esid: sec-%typedarray%.prototype.subarray
description: Return abrupt from ToInteger(end), end is symbol
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  9. If end is undefined, let relativeEnd be srcLength; else, let relativeEnd
  be ? ToInteger(end).
  ...
includes: [testTypedArray.js]
features: [Symbol, TypedArray]
---*/

var s = Symbol("1");

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();

  assert.throws(TypeError, function() {
    sample.subarray(0, s);
  });
});
