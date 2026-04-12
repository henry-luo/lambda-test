

/*---
es5id: 15.2.3.6-2-25
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 1e-5)
---*/

var obj = {};
Object.defineProperty(obj, 1e-5, {});

assert(obj.hasOwnProperty("0.00001"), 'obj.hasOwnProperty("0.00001") !== true');
