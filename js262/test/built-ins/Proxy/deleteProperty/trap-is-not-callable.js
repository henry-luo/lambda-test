

/*---
es6id: 9.5.10
description: >
    Throws when trap is not callable.
info: |
    9.5.10 [[Delete]] (P)

    6. Let trap be GetMethod(handler, "deleteProperty").
    ...

    7.3.9 GetMethod (O, P)

    5. If IsCallable(func) is false, throw a TypeError exception.
features: [Proxy]
---*/

var p = new Proxy({}, {
  deleteProperty: {}
});

assert.throws(TypeError, function() {
  delete p.attr;
});
