

/*---
es6id: 19.4.3.4
description: Behavior when `this` value is a Symbol
info: |
    1. Let s be the this value.
    2. If Type(s) is Symbol, return s.
features: [Symbol.toPrimitive]
---*/

assert.sameValue(Symbol.toPrimitive[Symbol.toPrimitive](), Symbol.toPrimitive);
