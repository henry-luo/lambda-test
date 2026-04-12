

/*---
es5id: 15.2.3.6-2-10
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is a negative number)
---*/

var obj = {};
Object.defineProperty(obj, -20, {});

assert(obj.hasOwnProperty("-20"), 'obj.hasOwnProperty("-20") !== true');
