

/*---
es5id: 15.2.3.4-2-1
description: >
    Object.getOwnPropertyNames - returned array is an array according
    to Array.isArray
---*/

var obj = {};
var result = Object.getOwnPropertyNames(obj);

assert(Array.isArray(result), 'Array.isArray(result) !== true');
