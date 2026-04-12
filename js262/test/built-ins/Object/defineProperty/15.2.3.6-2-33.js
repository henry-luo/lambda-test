

/*---
es5id: 15.2.3.6-2-33
description: Object.defineProperty - argument 'P' is applied to an empty string
---*/

var obj = {};
Object.defineProperty(obj, "", {});

assert(obj.hasOwnProperty(""), 'obj.hasOwnProperty("") !== true');
