

/*---
esid: sec-array.prototype.findindex
description: >
  Return abrupt from predicate call.
info: |
  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  7. Let k be 0.
  8. Repeat, while k < len
    ...
    d. Let testResult be ToBoolean(Call(predicate, T, «kValue, k, O»)).
    e. ReturnIfAbrupt(testResult).
  ...
---*/

var predicate = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  [1].findIndex(predicate);
});
