

/*---
es6id: 26.1.12
description: >
  Return abrupt result.
info: |
  26.1.12 Reflect.preventExtensions ( target )

  ...
  2. Return target.[[PreventExtensions]]().
features: [Proxy, Reflect]
---*/

var o1 = {};
var p = new Proxy(o1, {
  preventExtensions: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.preventExtensions(p);
});
