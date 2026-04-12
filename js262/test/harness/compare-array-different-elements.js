

/*---
description: >
    Arrays containing different elements are not equivalent.
includes: [compareArray.js]
---*/

var first = [0, 'a', undefined];
var second = [0, 'b', undefined];

assert.throws(Test262Error, () => {
  assert.compareArray(first, second);
}, 'Arrays containing different elements are not equivalent.');
