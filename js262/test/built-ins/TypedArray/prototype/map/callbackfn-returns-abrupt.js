

/*---
esid: sec-%typedarray%.prototype.map
description: >
  Returns abrupt from callbackfn
info: |
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  assert.throws(Test262Error, function() {
    sample.map(function() {
      throw new Test262Error();
    });
  });
});
