

/*---
includes: [sm/non262.js, sm/non262-strict-shell.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function fn() {
  return function(a, b, c) { };
}

assert.sameValue(testLenientAndStrict('var f = fn(); delete f.prototype',
                              returns(false), raisesException(TypeError)),
         true);

