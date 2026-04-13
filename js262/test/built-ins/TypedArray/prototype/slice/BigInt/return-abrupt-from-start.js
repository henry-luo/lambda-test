

/*---
esid: sec-%typedarray%.prototype.slice
description: Return abrupt from ToInteger(start)
info: |
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  4. Let relativeStart be ? ToInteger(start).
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
    sample.slice(o1);
  });

  assert.throws(Test262Error, function() {
    sample.slice(o2);
  });
});
