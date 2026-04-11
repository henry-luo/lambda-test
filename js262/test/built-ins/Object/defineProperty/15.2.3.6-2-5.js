

/*---
es5id: 15.2.3.6-2-5
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is NaN)
---*/

var obj = {};
Object.defineProperty(obj, NaN, {});

assert(obj.hasOwnProperty("NaN"), 'obj.hasOwnProperty("NaN") !== true');
