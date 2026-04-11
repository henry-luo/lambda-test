

/*---
es6id: 9.5.10
description: >
    [[Delete]] (P)

    A property cannot be reported as deleted, if it exists as a non-configurable
    own property of the target object.
info: |
    14. If targetDesc.[[Configurable]] is false, throw a TypeError exception.
features: [Proxy]
---*/

var target = {};
var p = new Proxy(target, {
  deleteProperty: function() {
    return true;
  }
});

Object.defineProperty(target, "attr", {
  configurable: false,
  value: 1
});

assert.throws(TypeError, function() {
  delete p.attr;
});
