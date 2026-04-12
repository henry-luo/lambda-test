

/*---
es6id: 26.1.8
description: >
  Returns the internal [[Prototype]] object.
info: |
  26.1.8 Reflect.getPrototypeOf ( target )

  ...
  2. Return target.[[GetPrototypeOf]]().
features: [Reflect]
---*/

var o = {};
assert.sameValue(
  Reflect.getPrototypeOf(o), Object.prototype,
  'return default prototypes'
);
