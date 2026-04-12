

/*---
es5id: 15.2.3.2-2-27
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (Error object)
---*/

var obj = new Error();

assert.sameValue(Object.getPrototypeOf(obj), Error.prototype, 'Object.getPrototypeOf(obj)');
