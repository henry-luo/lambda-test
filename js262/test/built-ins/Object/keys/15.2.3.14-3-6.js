

/*---
es5id: 15.2.3.14-3-6
description: >
    Object.keys - returns the standard built-in Array (instanceof
    Array)
---*/

var obj = {};

var arr = Object.keys(obj);

assert(arr instanceof Array, 'arr instanceof Array !== true');
