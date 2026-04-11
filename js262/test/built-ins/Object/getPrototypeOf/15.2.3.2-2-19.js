

/*---
es5id: 15.2.3.2-2-19
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Object object)
---*/

var obj = {};

assert.sameValue(Object.getPrototypeOf(obj), Object.prototype, 'Object.getPrototypeOf(obj)');
