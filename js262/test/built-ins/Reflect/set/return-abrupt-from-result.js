

/*---
es6id: 26.1.13
description: >
  Return abrupt result from get a property value.
info: |
  26.1.13 Reflect.set ( target, propertyKey, V [ , receiver ] )

  ...
  5. Return target.[[Set]](key, V, receiver).
features: [Reflect, Reflect.set]
---*/

var o1 = {};
Object.defineProperty(o1, 'p1', {
  set: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.set(o1, 'p1', 42);
});


var o2 = Object.create(o1);
assert.throws(Test262Error, function() {
  Reflect.set(o2, 'p1', 42);
});
