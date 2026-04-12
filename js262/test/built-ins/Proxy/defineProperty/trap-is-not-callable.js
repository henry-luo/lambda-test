

/*---
es6id: 9.5.6
description: >
    Throw a TypeError exception if trap is not callable.
info: |
    [[DefineOwnProperty]] (P, Desc)

    ...
    6. Let trap be GetMethod(handler, "defineProperty").
    ...
        7.3.9 GetMethod (O, P)
        ...
        2. Let func be GetV(O, P).
        5. If IsCallable(func) is false, throw a TypeError exception.
        ...
features: [Proxy]
---*/

var target = {};
var p = new Proxy(target, {
  defineProperty: {}
});

assert.throws(TypeError, function() {
  Object.defineProperty(p, "foo", {
    value: 1
  });
});
