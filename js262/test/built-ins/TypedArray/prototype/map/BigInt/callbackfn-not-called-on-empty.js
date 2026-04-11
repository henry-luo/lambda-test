

/*---
esid: sec-%typedarray%.prototype.map
description: >
  callbackfn is not called on empty instances
info: |
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  7. Let k be 0.
  8. Repeat, while k < len
    ...
    c. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
  ...
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var called = 0;

  new TA().map(function() {
    called++;
  });

  assert.sameValue(called, 0);
}, null, ["passthrough"]);
