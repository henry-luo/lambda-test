

/*---
es5id: 15.2.3.9-2-d-8
description: Object.freeze - 'O' is an Error object
---*/

var errObj = new SyntaxError();

Object.freeze(errObj);

assert(Object.isFrozen(errObj), 'Object.isFrozen(errObj) !== true');
