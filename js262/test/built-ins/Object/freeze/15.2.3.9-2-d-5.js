

/*---
es5id: 15.2.3.9-2-d-5
description: Object.freeze - 'O' is a Number object
---*/

var numObj = new Number(3);

Object.freeze(numObj);

assert(Object.isFrozen(numObj), 'Object.isFrozen(numObj) !== true');
