

/*---
es5id: 15.2.3.2-2-13
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (RangeError)
---*/

assert.sameValue(Object.getPrototypeOf(RangeError), Error, 'Object.getPrototypeOf(RangeError)');
