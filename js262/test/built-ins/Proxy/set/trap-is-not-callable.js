

/*---
es6id: 9.5.9
description: >
    Trap is not callable.
info: |
    [[Set]] ( P, V, Receiver)

    6. Let trap be GetMethod(handler, "set").
    ...

    7.3.9 GetMethod (O, P)

    5. If IsCallable(func) is false, throw a TypeError exception.
features: [Proxy]
---*/

var p = new Proxy({}, {
  set: {}
});

assert.throws(TypeError, function() {
  p.attr = 1;
});

assert.throws(TypeError, function() {
  p["attr"] = 1;
});
