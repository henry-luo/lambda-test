

/*---
es5id: 15.2.3.2-2-10
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (RegExp)
---*/

assert.sameValue(Object.getPrototypeOf(RegExp), Function.prototype, 'Object.getPrototypeOf(RegExp)');
