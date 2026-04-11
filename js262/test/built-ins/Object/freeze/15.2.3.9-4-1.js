

/*---
es5id: 15.2.3.9-4-1
description: Object.freeze - 'O' is sealed already
---*/

var obj = {};

obj.foo = 10; 

Object.seal(obj);

Object.freeze(obj);

assert(Object.isFrozen(obj), 'Object.isFrozen(obj) !== true');
