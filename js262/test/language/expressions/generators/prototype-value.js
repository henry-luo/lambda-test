

/*---
description: >
    Generator instances directly inherit properties from the object that is the
    value of the prototype property of the Generator function that created the
    instance.
es6id: 25.3
features: [generators]
---*/

var g = function*() {};

assert.sameValue(
  Object.getPrototypeOf(g()),
  g.prototype,
  'Instance created via function invocation'
);
