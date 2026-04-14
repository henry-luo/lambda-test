

/*---
esid: sec-%typedarray%.prototype.subarray
description: Return abrupt from ToInteger(begin)
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  7. Let relativeBegin be ? ToInteger(begin).
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

var o1 = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var o2 = {
  toString: function() {
    throw new Test262Error();
  }
};

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA();

  assert.throws(Test262Error, function() {
    sample.subarray(o1);
  });

  assert.throws(Test262Error, function() {
    sample.subarray(o2);
  });
});
