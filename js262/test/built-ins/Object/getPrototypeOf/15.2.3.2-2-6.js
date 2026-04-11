

/*---
es5id: 15.2.3.2-2-6
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (String)
---*/

assert.sameValue(Object.getPrototypeOf(String), Function.prototype, 'Object.getPrototypeOf(String)');
