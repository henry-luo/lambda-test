

/*---
es6id: 26.1.9
description: >
  Return abrupt result.
info: |
  26.1.9 Reflect.has ( target, propertyKey )

  ...
  4. Return target.[[HasProperty]](key).
features: [Proxy, Reflect]
---*/

var o = {};
var p = new Proxy(o, {
  has: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.has(p, 'p1');
});
