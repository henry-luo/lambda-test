

/*---
es6id: 26.1.6
description: >
  Throws a TypeError if target is a Symbol
info: |
  26.1.6 Reflect.get ( target, propertyKey [ , receiver ])

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect, Symbol]
---*/

assert.throws(TypeError, function() {
  Reflect.get(Symbol(1), 'p');
});
