

/*---
description: >
    `yield` may be used as the binding identifier of a function expression
    within generator bodies.
features: [generators]
es6id: 14.1
flags: [noStrict]
---*/

var result;
var obj = {
  *g() {
    (function yield() {});
  }
};

result = obj.g().next();

assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
