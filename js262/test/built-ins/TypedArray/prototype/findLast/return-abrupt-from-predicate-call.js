

/*---
esid: sec-%typedarray%.prototype.findlast
description: >
  Return abrupt from predicate call.
info: |
  %TypedArray%.prototype.findLast (predicate [ , thisArg ] )

  6. Repeat, while k ≥ 0,
  ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...
includes: [testTypedArray.js]
features: [TypedArray, array-find-from-last]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);

  var predicate = function() {
    throw new Test262Error();
  };

  assert.throws(Test262Error, function() {
    sample.findLast(predicate);
  });
});
