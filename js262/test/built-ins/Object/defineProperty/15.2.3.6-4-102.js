

/*---
es5id: 15.2.3.6-4-102
description: >
    Object.defineProperty - 'name' and 'desc' are data properties,
    desc.value is present and name.value is undefined (8.12.9 step 12)
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = undefined; 

Object.defineProperty(obj, "foo", {
  value: 100
});

verifyProperty(obj, "foo", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true,
});
