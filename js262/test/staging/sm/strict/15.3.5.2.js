

/*---
includes: [sm/non262-strict-shell.js]
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

