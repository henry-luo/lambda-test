

/*---
es6id: 26.1.4
description: >
  Throws a TypeError if target is not an Object.
info: |
  26.1.4 Reflect.deleteProperty ( target, propertyKey )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect]
---*/

assert.throws(TypeError, function() {
  Reflect.deleteProperty(1, 'p');
});

assert.throws(TypeError, function() {
  Reflect.deleteProperty(null, 'p');
});

assert.throws(TypeError, function() {
  Reflect.deleteProperty(undefined, 'p');
});

assert.throws(TypeError, function() {
  Reflect.deleteProperty('', 'p');
});
