

/*---
es5id: 15.2.3.2-2-22
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (String object)
---*/

var obj = new String("abc");

assert.sameValue(Object.getPrototypeOf(obj), String.prototype, 'Object.getPrototypeOf(obj)');
