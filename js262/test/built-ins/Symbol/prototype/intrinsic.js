

/*---
es6id: 19.4.3
description: >
    Symbol prototype
features: [Symbol]
---*/
assert.sameValue(
  Object.getPrototypeOf(Symbol('66')),
  Symbol.prototype,
  "`Object.getPrototypeOf(Symbol('66'))` returns `Symbol.prototype`"
);
