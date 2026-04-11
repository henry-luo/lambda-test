

/*---
es5id: 15.2.3.2-2-11
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Error)
---*/

assert.sameValue(Object.getPrototypeOf(Error), Function.prototype, 'Object.getPrototypeOf(Error)');
