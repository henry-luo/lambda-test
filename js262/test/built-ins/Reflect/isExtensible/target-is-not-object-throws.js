

/*---
es6id: 26.1.10
description: >
  Throws a TypeError if target is not an Object.
info: |
  26.1.10 Reflect.isExtensible (target)

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect]
---*/

assert.throws(TypeError, function() {
  Reflect.isExtensible(1);
});

assert.throws(TypeError, function() {
  Reflect.isExtensible(null);
});

assert.throws(TypeError, function() {
  Reflect.isExtensible(undefined);
});

assert.throws(TypeError, function() {
  Reflect.isExtensible('');
});
