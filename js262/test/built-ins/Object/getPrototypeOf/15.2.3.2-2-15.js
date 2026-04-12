

/*---
es5id: 15.2.3.2-2-15
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (SyntaxError)
---*/

assert.sameValue(Object.getPrototypeOf(SyntaxError), Error, 'Object.getPrototypeOf(SyntaxError)');
