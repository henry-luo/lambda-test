

/*---
es6id: 9.5.5
description: >
    Throws a TypeError exception if trap result and target property descriptors
    are not compatible.
info: |
    [[GetOwnProperty]] (P)

    ...
    20. Let valid be IsCompatiblePropertyDescriptor (extensibleTarget,
    resultDesc, targetDesc).
    21. If valid is false, throw a TypeError exception.
features: [Proxy]
---*/

var target = {};

var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(t, prop) {
    var foo = {
      bar: 1
    };

    return Object.getOwnPropertyDescriptor(foo, "bar");
  }
});

Object.preventExtensions(target);

assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptor(p, "bar");
});
