

/*---
es5id: 15.2.3.7-6-a-38
description: >
    Object.defineProperties - 'P' exists in 'O', test 'P' makes no
    change if 'desc' is generic descriptor without any attribute
    (8.12.9 step 5)
includes: [propertyHelper.js]
---*/


var obj = {};
obj.foo = 100; 

Object.defineProperties(obj, {
  foo: {}
});

verifyProperty(obj, "foo", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true,
});
