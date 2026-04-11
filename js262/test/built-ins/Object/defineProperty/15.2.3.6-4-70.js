

/*---
es5id: 15.2.3.6-4-70
description: >
    Object.defineProperty - desc.value and name.value are two boolean
    values with different values (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = true; 

Object.defineProperty(obj, "foo", {
  value: false
});

verifyProperty(obj, "foo", {
  value: false,
  writable: true,
  enumerable: true,
  configurable: true,
});
