

/*---
es6id: 26.1.14
description: >
  Throws a TypeError if target is a Symbol
info: |
  26.1.14 Reflect.setPrototypeOf ( target, proto )

  1. If Type(target) is not Object, throw a TypeError exception.
  ...
features: [Reflect, Reflect.setPrototypeOf, Symbol]
---*/

assert.throws(TypeError, function() {
  Reflect.setPrototypeOf(Symbol(1), {});
});
