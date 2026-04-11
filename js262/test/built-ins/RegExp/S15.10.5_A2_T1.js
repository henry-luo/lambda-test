

/*---
info: |
    The value of the internal [[Prototype]] property of the RegExp
    constructor is the Function prototype object
es5id: 15.10.5_A2_T1
description: Checking Function.prototype.isPrototypeOf(RegExp)
---*/
assert.sameValue(
  Function.prototype.isPrototypeOf(RegExp),
  true,
  'Function.prototype.isPrototypeOf(RegExp) must return true'
);
