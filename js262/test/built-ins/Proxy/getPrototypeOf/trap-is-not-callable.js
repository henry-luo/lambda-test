

/*---
es6id: 9.5.1
description: >
    Throws if trap is not callable.
features: [Proxy]
---*/

var p = new Proxy({}, {
  getPrototypeOf: {}
});

assert.throws(TypeError, function() {
  Object.getPrototypeOf(p);
});
