

/*---
es6id: 9.5.3
description: >
    The trap returns a boolean result.
features: [Proxy]
---*/

var target = {};
var p = new Proxy(target, {
  isExtensible: function(t) {
    if (Object.isExtensible(t)) {
      return 1;
    } else {
      return 0;
    }
  }
});

assert.sameValue(Object.isExtensible(p), true);

Object.preventExtensions(target);

assert.sameValue(Object.isExtensible(p), false);
