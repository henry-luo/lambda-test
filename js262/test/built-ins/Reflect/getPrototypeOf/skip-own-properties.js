

/*---
es6id: 26.1.8
description: >
  Skip own properties to return the internal [[Prototype]] object.
info: |
  26.1.8 Reflect.getPrototypeOf ( target )

  ...
  2. Return target.[[GetPrototypeOf]]().
features: [Reflect]
---*/

var valid = {};
var o = Object.create(valid, {
  prototype: {
    value: 'invalid',
    enumerable: true
  }
});

assert.sameValue(
  Reflect.getPrototypeOf(o), valid,
  'skip own properties'
);
