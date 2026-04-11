

/*---
es5id: 15.2.3.6-4-58
description: >
    Object.defineProperty - 'name' is data descriptor and every fields
    in 'desc' is absent (8.12.9 step 5)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = 101; 

Object.defineProperty(obj, "foo", {});

verifyProperty(obj, "foo", {
  value: 101,
  writable: true,
  enumerable: true,
  configurable: true,
});
