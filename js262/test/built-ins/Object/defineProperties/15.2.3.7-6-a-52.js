

/*---
es5id: 15.2.3.7-6-a-52
description: >
    Object.defineProperties - desc.value and P.value are two boolean
    values with different values (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = true; 

Object.defineProperties(obj, {
  foo: {
    value: false
  }
});

verifyProperty(obj, "foo", {
  value: false,
  writable: true,
  enumerable: true,
  configurable: true,
});
