

/*---
es5id: 15.2.3.2-2-14
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (ReferenceError)
---*/

assert.sameValue(Object.getPrototypeOf(ReferenceError), Error, 'Object.getPrototypeOf(ReferenceError)');
