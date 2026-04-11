

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Returns abrupt from callbackfn
info: |
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  9. Repeat, while k < len
    ...
    c. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
  ...
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA, makeCtorArg) {
  var sample = new TA(makeCtorArg(3));

  assert.throws(Test262Error, function() {
    sample.filter(function() {
      throw new Test262Error();
    });
  });
});
