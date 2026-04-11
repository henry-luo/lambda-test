

/*---
description: >
    Spares arrays are only equivalent if they have the same length.
includes: [compareArray.js]
---*/


assert.compareArray([,], [,], 'Sparse arrays of the same length are equivalent.');
assert.throws(Test262Error, () => {
  assert.compareArray([,], [,,]);
}, 'Sparse arrays of differing lengths are not equivalent.');
assert.throws(Test262Error, () => {
  assert.compareArray([,,], [,]);
}, 'Sparse arrays of differing lengths are not equivalent.');
assert.throws(Test262Error, () => {
  assert.compareArray([,], []);
}, 'Sparse arrays are not equivalent to empty arrays.');
assert.throws(Test262Error, () => {
  assert.compareArray([], [,]);
}, 'Sparse arrays are not equivalent to empty arrays.');
