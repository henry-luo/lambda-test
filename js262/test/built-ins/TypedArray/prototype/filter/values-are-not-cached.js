

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Integer indexed values are not cached before interaction
info: |
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  9. Repeat, while k < len
    ...
    c. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA, makeCtorArg) {
  var sample = new TA(makeCtorArg([42, 43, 44]));

  sample.filter(function(v, i) {
    if (i < sample.length - 1) {
      sample[i+1] = 42;
    }

    assert.sameValue(
      v, 42, "method does not cache values before callbackfn calls"
    );
  });
});
