

/*---
es6id: 26.1.7
description: >
  Throws a TypeError if target is not an Object.
info: |
  26.1.7 Reflect.getOwnPropertyDescriptor ( target, propertyKey )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect]
---*/

assert.throws(TypeError, function() {
  Reflect.getOwnPropertyDescriptor(1, 'p');
});

assert.throws(TypeError, function() {
  Reflect.getOwnPropertyDescriptor(null, 'p');
});

assert.throws(TypeError, function() {
  Reflect.getOwnPropertyDescriptor(undefined, 'p');
});

assert.throws(TypeError, function() {
  Reflect.getOwnPropertyDescriptor('', 'p');
});
