

/*---
description: Statement within statement is a candidate for tail-call optimization.
esid: sec-static-semantics-hascallintailposition
flags: [onlyStrict]
features: [tail-call-optimization]
includes: [tcoHelper.js]
---*/

var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  do {
    return f(n - 1);
  } while (false)
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);
