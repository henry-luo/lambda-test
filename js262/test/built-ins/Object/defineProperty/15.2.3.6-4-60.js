

/*---
es5id: 15.2.3.6-4-60
description: >
    Object.defineProperty - type of desc.value is different from type
    of name.value (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = 101; 

Object.defineProperty(obj, "foo", {
  value: "abc"
});

verifyProperty(obj, "foo", {
  value: "abc",
  writable: true,
  enumerable: true,
  configurable: true,
});
