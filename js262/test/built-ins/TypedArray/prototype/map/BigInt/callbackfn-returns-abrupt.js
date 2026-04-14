

/*---
esid: sec-%typedarray%.prototype.map
description: >
  Returns abrupt from callbackfn
info: |
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  assert.throws(Test262Error, function() {
    sample.map(function() {
      throw new Test262Error();
    });
  });
});
