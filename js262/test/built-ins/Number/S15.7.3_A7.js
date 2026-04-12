

/*---
info: |
    The value of the internal [[Prototype]] property of the Number
    constructor is the Function prototype object
es5id: 15.7.3_A7
description: Checking Function.prototype.isPrototypeOf(Number)
---*/
assert(
  Function.prototype.isPrototypeOf(Number),
  'Function.prototype.isPrototypeOf(Number) must return true'
);
