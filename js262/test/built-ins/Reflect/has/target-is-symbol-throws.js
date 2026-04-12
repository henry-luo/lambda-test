

/*---
es6id: 26.1.9
description: >
  Throws a TypeError if target is a Symbol
info: |
  26.1.9 Reflect.has ( target, propertyKey )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect, Symbol]
---*/

assert.throws(TypeError, function() {
  Reflect.has(Symbol(1), 'p');
});
