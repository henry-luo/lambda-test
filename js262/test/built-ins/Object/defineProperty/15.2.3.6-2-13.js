

/*---
es5id: 15.2.3.6-2-13
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is -Infinity)
---*/

var obj = {};
Object.defineProperty(obj, -Infinity, {});

assert(obj.hasOwnProperty("-Infinity"), 'obj.hasOwnProperty("-Infinity") !== true');
