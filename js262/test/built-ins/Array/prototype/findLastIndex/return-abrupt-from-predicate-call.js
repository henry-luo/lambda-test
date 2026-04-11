

/*---
esid: sec-array.prototype.findlastindex
description: >
  Return abrupt from predicate call.
info: |
  Array.prototype.findLastIndex ( predicate[ , thisArg ] )

  ...
  4. Let k be len - 1.
  5. Repeat, while k ≥ 0,
    ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
    d. If testResult is true, return 𝔽(k).
  ...
features: [array-find-from-last]
---*/

var predicate = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  [1].findLastIndex(predicate);
});
