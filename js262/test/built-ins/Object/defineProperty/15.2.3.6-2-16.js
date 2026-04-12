

/*---
es5id: 15.2.3.6-2-16
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 1(following 22 zeros))
---*/

var obj = {};
Object.defineProperty(obj, 10000000000000000000000, {});

assert(obj.hasOwnProperty("1e+22"), 'obj.hasOwnProperty("1e+22") !== true');
