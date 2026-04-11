

/*---
info: |
    The value of the internal [[Prototype]] property of the Function
    prototype object is the Object prototype object (15.3.4)
es5id: 15.3.4_A3_T1
description: Checking prototype of Function.prototype
---*/
assert.sameValue(
  Object.getPrototypeOf(Function.prototype),
  Object.prototype,
  'Object.getPrototypeOf(Function.prototype) returns Object.prototype'
);
