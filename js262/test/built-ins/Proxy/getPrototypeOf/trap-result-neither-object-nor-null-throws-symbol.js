

/*---
es6id: 9.5.1
description: >
    Throw a TypeError exception if trap result is a Symbol.
features: [Proxy, Symbol]
---*/

var p = new Proxy({}, {
  getPrototypeOf: function() {
    return Symbol();
  }
});

assert.throws(TypeError, function() {
  Object.getPrototypeOf(p);
});
