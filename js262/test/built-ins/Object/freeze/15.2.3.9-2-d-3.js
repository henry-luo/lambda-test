

/*---
es5id: 15.2.3.9-2-d-3
description: Object.freeze - 'O' is a String object
---*/

var strObj = new String("a");

Object.freeze(strObj);

assert(Object.isFrozen(strObj), 'Object.isFrozen(strObj) !== true');
