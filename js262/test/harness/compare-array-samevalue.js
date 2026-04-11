

/*---
description: >
  compareArray uses SameValue for value comparison.
includes: [compareArray.js]
---*/

assert.compareArray([NaN], [NaN]);
assert.throws(Test262Error, () => {
  assert.compareArray([0], [-0]);
});
