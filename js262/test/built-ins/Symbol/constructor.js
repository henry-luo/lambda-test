

/*---
es6id: 19.4.3.1
description: >
    Symbol constructor
features: [Symbol]
---*/
assert.sameValue(
  Object.getPrototypeOf(Symbol('66')).constructor,
  Symbol,
  "The value of `Object.getPrototypeOf(Symbol('66')).constructor` is `Symbol`"
);
assert.sameValue(
  Object.getPrototypeOf(Object(Symbol('66'))).constructor,
  Symbol,
  "The value of `Object.getPrototypeOf(Object(Symbol('66'))).constructor` is `Symbol`"
);
