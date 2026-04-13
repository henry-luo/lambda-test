

/*---
esid: sec-%typedarray%.prototype.subarray
description: Return abrupt from ToInteger(begin), begin is symbol
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  7. Let relativeBegin be ? ToInteger(begin).
  ...
includes: [testTypedArray.js]
features: [Symbol, TypedArray]
---*/

var s = Symbol("1");

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();
  
  assert.throws(TypeError, function() {
    sample.subarray(s);
  });
});
