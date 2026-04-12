

/*---
es5id: 15.2.3.6-2-3
description: >
    Object.defineProperty - argument 'P' is a boolean whose value is
    false
---*/

var obj = {};
Object.defineProperty(obj, false, {});

assert(obj.hasOwnProperty("false"), 'obj.hasOwnProperty("false") !== true');
