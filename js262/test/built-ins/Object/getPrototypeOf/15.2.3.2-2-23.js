

/*---
es5id: 15.2.3.2-2-23
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Boolean object)
---*/

var obj = new Boolean(true);

assert.sameValue(Object.getPrototypeOf(obj), Boolean.prototype, 'Object.getPrototypeOf(obj)');
