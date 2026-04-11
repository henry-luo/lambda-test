

/*---
es5id: 15.2.3.6-2-22
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 0.00000001)
---*/

var obj = {};
Object.defineProperty(obj, 0.00000001, {});

assert(obj.hasOwnProperty("1e-8"), 'obj.hasOwnProperty("1e-8") !== true');
