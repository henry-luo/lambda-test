

/*---
es5id: 15.2.3.6-2-27
description: >
    Object.defineProperty - argument 'P' is a decimal that converts to
    a string (value is 123.456)
---*/

var obj = {};
Object.defineProperty(obj, 123.456, {});

assert(obj.hasOwnProperty("123.456"), 'obj.hasOwnProperty("123.456") !== true');
