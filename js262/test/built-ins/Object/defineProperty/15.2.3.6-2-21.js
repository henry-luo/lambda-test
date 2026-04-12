

/*---
es5id: 15.2.3.6-2-21
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 0.0000001)
---*/

var obj = {};
Object.defineProperty(obj, 0.0000001, {});

assert(obj.hasOwnProperty("1e-7"), 'obj.hasOwnProperty("1e-7") !== true');
