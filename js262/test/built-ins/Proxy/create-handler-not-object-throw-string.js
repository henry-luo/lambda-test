

/*---
es6id: 9.5.15
description: >
    Proxy ( target, handler )
    ...
    3. If Type(handler) is not Object, throw a TypeError exception.
    ...
features: [Proxy]
---*/

assert.throws(TypeError, function() {
  new Proxy({}, "");
});
