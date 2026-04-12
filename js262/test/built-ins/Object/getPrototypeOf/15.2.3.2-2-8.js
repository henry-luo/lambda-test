

/*---
es5id: 15.2.3.2-2-8
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Math)
---*/

assert.sameValue(Object.getPrototypeOf(Math), Object.prototype, 'Object.getPrototypeOf(Math)');
