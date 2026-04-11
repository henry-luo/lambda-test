

/*---
es5id: 15.2.3.6-4-333-1
description: >
    Object.defineProperty will update [[Value]] attribute of named
    property 'P' successfully when [[Configurable]] attribute is
    false, [[Writable]] attribute is true and 'O' is an Object object
    (8.12.9 - step 10)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "property", {
  value: 1001,
  writable: true,
  configurable: false
});

Object.defineProperty(obj, "property", {
  value: 1002
});

verifyProperty(obj, "property", {
  value: 1002,
  writable: true,
  enumerable: false,
  configurable: false,
});
