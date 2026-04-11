

/*---
es5id: 15.2.3.9-4-3
description: Object.freeze - the extensions of 'O' is prevented already
---*/

var obj = {};

obj.foo = 10; 

Object.preventExtensions(obj);

Object.freeze(obj);

assert(Object.isFrozen(obj), 'Object.isFrozen(obj) !== true');
