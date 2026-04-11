

/*---
es6id: 9.5.1
description: >
    Trap returns abrupt.
info: |
    8. Let handlerProto be Call(trap, handler, «target»).
    9. ReturnIfAbrupt(handlerProto).
features: [Proxy]
---*/

var p = new Proxy({}, {
  getPrototypeOf: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Object.getPrototypeOf(p);
});
