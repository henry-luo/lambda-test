

/*---
es6id: 9.5.3
description: >
    Return trap result.
features: [Proxy]
---*/

var target = {};
var p = new Proxy(target, {
  isExtensible: function(t) {
    return Object.isExtensible(t);
  }
});

assert.sameValue(Object.isExtensible(p), true);

Object.preventExtensions(target);

assert.sameValue(Object.isExtensible(p), false);
