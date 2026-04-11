

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  callbackfn is not called on empty instances
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

testWithBigIntTypedArrayConstructors(function(TA) {
  var called = 0;

  new TA().filter(function() {
    called++;
  });

  assert.sameValue(called, 0);
}, null, ["passthrough"]);
