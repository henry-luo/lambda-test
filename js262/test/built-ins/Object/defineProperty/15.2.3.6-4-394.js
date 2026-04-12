

/*---
es5id: 15.2.3.6-4-394
description: ES5 Attributes - [[Value]] attribute of data property is undefined
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: undefined
});

var desc = Object.getOwnPropertyDescriptor(obj, "prop");

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(typeof obj.prop, "undefined", 'typeof obj.prop');
assert.sameValue(typeof desc.value, "undefined", 'typeof desc.value');
