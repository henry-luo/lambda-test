

/*---
es6id: 26.1.8
description: >
  Throws a TypeError if target is not an Object.
info: |
  26.1.8 Reflect.getPrototypeOf ( target )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect]
---*/

assert.throws(TypeError, function() {
  Reflect.getPrototypeOf(1);
});

assert.throws(TypeError, function() {
  Reflect.getPrototypeOf(null);
});

assert.throws(TypeError, function() {
  Reflect.getPrototypeOf(undefined);
});

assert.throws(TypeError, function() {
  Reflect.getPrototypeOf('');
});
