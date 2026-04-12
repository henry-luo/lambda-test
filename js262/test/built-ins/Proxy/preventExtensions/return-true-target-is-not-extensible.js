

/*---
es6id: 9.5.4
description: >
    Return boolean trap result if its true and target is not extensible.
features: [Proxy, Reflect]
---*/

var target = {};
var p = new Proxy(target, {
  preventExtensions: function(t) {
    return 1;
  }
});

Object.preventExtensions(target);

assert(Reflect.preventExtensions(p));
