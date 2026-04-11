

/*---
es5id: 15.2.3.6-2-6
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 0)
---*/

var obj = {};
Object.defineProperty(obj, 0, {});

assert(obj.hasOwnProperty("0"), 'obj.hasOwnProperty("0") !== true');
