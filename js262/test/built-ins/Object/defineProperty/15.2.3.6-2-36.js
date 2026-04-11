

/*---
es5id: 15.2.3.6-2-36
description: Object.defineProperty - argument 'P' is applied to string 'null'
---*/

var obj = {};
Object.defineProperty(obj, "null", {});

assert(obj.hasOwnProperty("null"), 'obj.hasOwnProperty("null") !== true');
