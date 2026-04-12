

/*---
es5id: 15.2.3.6-4-100
description: >
    Object.defineProperty - 'name' and 'desc' are data properties,
    desc.value and name.value are two different values (8.12.9 step 12)
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = 100; 

Object.defineProperty(obj, "foo", {
  value: 200
});

verifyProperty(obj, "foo", {
  value: 200,
  writable: true,
  enumerable: true,
  configurable: true,
});
