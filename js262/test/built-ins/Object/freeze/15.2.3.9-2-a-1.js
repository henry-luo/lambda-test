

/*---
es5id: 15.2.3.9-2-a-1
description: Object.freeze - 'P' is own data property
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = 10; 

Object.freeze(obj);

verifyProperty(obj, "foo", {
  value: 10,
  writable: false,
  configurable: false,
});
