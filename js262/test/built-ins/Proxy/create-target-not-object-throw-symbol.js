

/*---
es6id: 9.5.15
description: >
    Proxy ( target, handler )
    ...
    1. If Type(target) is not Object, throw a TypeError exception.
    ...
features: [Proxy, Symbol]
---*/

assert.throws(TypeError, function() {
  new Proxy(Symbol(), {});
});
