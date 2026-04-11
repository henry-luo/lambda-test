

/*---
es6id: 9.5.1
description: >
    Throw a TypeError exception if trap result is false.
features: [Proxy]
---*/

var p = new Proxy({}, {
  getPrototypeOf: function() {
    return false;
  }
});

assert.throws(TypeError, function() {
  Object.getPrototypeOf(p);
});
