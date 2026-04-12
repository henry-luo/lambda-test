

/*---
esid: sec-function.prototype.call
es6id: 19.2.3.3
description: Value when invoked via `Function.prototype.call`
info: |
  [...]
  5. Return ? Call(func, thisArg, argList).
features: [new.target]
---*/

var newTarget = null;

function f() {
  newTarget = new.target;
}

f.call({});

assert.sameValue(newTarget, undefined);
