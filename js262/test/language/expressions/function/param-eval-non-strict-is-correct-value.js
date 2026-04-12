

/*---
esid: sec-strict-mode-of-ecmascript
description: >
    eval allowed as formal parameter name of a non-strict function expression
flags: [noStrict]
---*/

let exprCallCount = 0;
let evalValue = {};

let foo = function(eval) {
  assert.sameValue(eval, evalValue);
  exprCallCount += 1;
};

foo(evalValue);

assert.sameValue(exprCallCount, 1);
