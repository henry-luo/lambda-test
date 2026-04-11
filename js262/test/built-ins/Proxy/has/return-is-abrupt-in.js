

/*---
es6id: 9.5.7
description: >
    Trap returns abrupt. Using `prop in obj`.
info: |
    [[HasProperty]] (P)

    ...
    9. Let booleanTrapResult be ToBoolean(Call(trap, handler, «target, P»)).
    10. ReturnIfAbrupt(booleanTrapResult).
    ...
features: [Proxy]
---*/

var p = new Proxy({}, {
  has: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  "attr" in p;
});
