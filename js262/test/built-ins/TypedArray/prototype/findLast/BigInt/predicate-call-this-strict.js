

/*---
esid: sec-%typedarray%.prototype.findlast
description: >
  Verify predicate this on strict mode
info: |
  %TypedArray%.prototype.findLast (predicate [ , thisArg ] )

  6. Repeat, while k ≥ 0,
  ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...
flags: [onlyStrict]
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray, array-find-from-last]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(1);
  var result;

  sample.findLast(function() {
    result = this;
  });

  assert.sameValue(
    result,
    undefined,
    "without thisArg, predicate this is undefined"
  );

  var o = {};
  sample.findLast(function() {
    result = this;
  }, o);

  assert.sameValue(result, o, "thisArg becomes the predicate this");
});
