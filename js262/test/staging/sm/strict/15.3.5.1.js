

/*---
includes: [sm/non262-strict-shell.js]
description: |
  pending
esid: pending
---*/
function fn() {
  return function(a, b, c) { };
}

assert.sameValue(testLenientAndStrict('var f = fn(); f.length = 1; f.length',
                              returns(3), raisesException(TypeError)),
         true);

