

/*---
esid: sec-%typedarray%.prototype.slice
description: Return abrupt from ToInteger(end)
info: |
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  6. If end is undefined, let relativeEnd be len; else let relativeEnd be ?
  ToInteger(end).
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
    sample.slice(0, o1);
  });

  assert.throws(Test262Error, function() {
    sample.slice(0, o2);
  });
});
