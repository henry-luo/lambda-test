

/*---
es5id: 15.2.3.2-2-7
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Number)
---*/

assert.sameValue(Object.getPrototypeOf(Number), Function.prototype, 'Object.getPrototypeOf(Number)');
