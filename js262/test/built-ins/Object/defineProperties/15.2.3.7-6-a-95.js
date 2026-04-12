

/*---
es5id: 15.2.3.7-6-a-95
description: >
    Object.defineProperties - 'P' is data property, P.value is present
    and properties.value is undefined (8.12.9 step 12)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
  value: 200,
  enumerable: true,
  writable: true,
  configurable: true
});

Object.defineProperties(obj, {
  foo: {
    value: undefined
  }
});

verifyProperty(obj, "foo", {
  value: undefined,
  writable: true,
  enumerable: true,
  configurable: true,
});
