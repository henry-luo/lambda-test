

/*---
es6id: 9.5.10
description: >
    Trap return is an abrupt.
info: |
    9. Let booleanTrapResult be ToBoolean(Call(trap, handler, «target, P»)).
    10. ReturnIfAbrupt(booleanTrapResult).
features: [Proxy]
---*/

var p = new Proxy({}, {
  deleteProperty: function(t, prop) {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  delete p.attr;
});
