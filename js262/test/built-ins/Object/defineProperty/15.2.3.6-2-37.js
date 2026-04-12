

/*---
es5id: 15.2.3.6-2-37
description: >
    Object.defineProperty - argument 'P' is applied to string
    '123αβπcd'
---*/

var obj = {};
Object.defineProperty(obj, "123αβπcd", {});

assert(obj.hasOwnProperty("123αβπcd"), 'obj.hasOwnProperty("123αβπcd") !== true');
