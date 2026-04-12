

/*---
es5id: 15.2.3.2-2-9
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Date)
---*/

assert.sameValue(Object.getPrototypeOf(Date), Function.prototype, 'Object.getPrototypeOf(Date)');
