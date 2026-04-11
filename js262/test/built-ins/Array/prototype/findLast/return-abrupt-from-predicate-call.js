

/*---
esid: sec-array.prototype.findlast
description: >
  Return abrupt from predicate call.
info: |
  Array.prototype.findLast ( predicate[ , thisArg ] )

  ...
  4. Let k be len - 1.
  5. Repeat, while k ≥ 0,
    ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
    d. If testResult is true, return kValue.
  ...
features: [array-find-from-last]
---*/

var predicate = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  [1].findLast(predicate);
});
