

/*---
es6id: 9.5.1
description: >
    Throw a TypeError exception if trap result is undefined.
features: [Proxy]
---*/

var p = new Proxy({}, {
  getPrototypeOf: function() {
    return undefined;
  }
});

assert.throws(TypeError, function() {
  Object.getPrototypeOf(p);
});
