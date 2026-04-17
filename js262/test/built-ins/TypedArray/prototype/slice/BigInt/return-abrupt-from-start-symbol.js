

/*---
esid: sec-%typedarray%.prototype.slice
description: Return abrupt from ToInteger(start), start is symbol
info: |
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  4. Let relativeStart be ? ToInteger(start).
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, Symbol, TypedArray]
---*/

var s = Symbol("1");

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA();

  assert.throws(TypeError, function() {
    sample.slice(s);
  });
});
