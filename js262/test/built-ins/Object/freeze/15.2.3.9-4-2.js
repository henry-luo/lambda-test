

/*---
es5id: 15.2.3.9-4-2
description: Object.freeze - 'O' is frozen already
---*/

var obj = {};

obj.foo = 10; 

Object.freeze(obj);

Object.freeze(obj);

assert(Object.isFrozen(obj), 'Object.isFrozen(obj) !== true');
