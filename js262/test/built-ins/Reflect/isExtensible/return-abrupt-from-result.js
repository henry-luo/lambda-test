

/*---
es6id: 26.1.10
description: >
  Return abrupt result.
info: |
  26.1.10 Reflect.isExtensible (target)

  ...
  2. Return target.[[IsExtensible]]().
features: [Proxy, Reflect]
---*/

var o1 = {};
var p = new Proxy(o1, {
  isExtensible: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.isExtensible(p);
});
