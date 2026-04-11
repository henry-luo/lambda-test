

/*---
description: >
    Arrays of differing lengths are not equivalent.
includes: [compareArray.js]
---*/


assert.throws(Test262Error, () => {
  assert.compareArray([], [undefined]);
}, 'Arrays of differing lengths are not equivalent.');

assert.throws(Test262Error, () => {
  assert.compareArray([undefined], []);
}, 'Arrays of differing lengths are not equivalent.');
