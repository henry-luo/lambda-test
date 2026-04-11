

/*---
es5id: 15.2.3.2-2-18
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (JSON)
---*/

assert.sameValue(Object.getPrototypeOf(JSON), Object.prototype, 'Object.getPrototypeOf(JSON)');
