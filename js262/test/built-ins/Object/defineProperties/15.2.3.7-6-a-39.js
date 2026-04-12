

/*---
es5id: 15.2.3.7-6-a-39
description: >
    Object.defineProperties - 'P' is data descriptor and every fields
    in 'desc' is the same with 'P' (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = 101; 

Object.defineProperties(obj, {
  foo: {
    value: 101,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

verifyProperty(obj, "foo", {
  value: 101,
  writable: true,
  enumerable: true,
  configurable: true,
});
