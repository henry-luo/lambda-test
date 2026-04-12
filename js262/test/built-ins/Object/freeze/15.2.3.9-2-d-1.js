

/*---
es5id: 15.2.3.9-2-d-1
description: Object.freeze - 'O' is a Function object
---*/

var funObj = function() {};

Object.freeze(funObj);

assert(Object.isFrozen(funObj), 'Object.isFrozen(funObj) !== true');
