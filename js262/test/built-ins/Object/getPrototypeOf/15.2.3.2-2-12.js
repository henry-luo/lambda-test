

/*---
es5id: 15.2.3.2-2-12
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (EvalError)
---*/

assert.sameValue(Object.getPrototypeOf(EvalError), Error, 'Object.getPrototypeOf(EvalError)');
