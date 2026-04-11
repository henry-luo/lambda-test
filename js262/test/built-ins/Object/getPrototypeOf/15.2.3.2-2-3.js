

/*---
es5id: 15.2.3.2-2-3
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Object)
---*/

assert.sameValue(Object.getPrototypeOf(Object), Function.prototype, 'Object.getPrototypeOf(Object)');
