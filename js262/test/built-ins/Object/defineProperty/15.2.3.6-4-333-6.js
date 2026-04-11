

/*---
es5id: 15.2.3.6-4-333-6
description: >
    Object.defineProperty will update [[Value]] attribute of indexed
    property 'P' successfully when [[Configurable]] attribute is
    false, [[Writable]] attribute is true and 'O' is an Object object
    (8.12.9 - step 10)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "0", {
  value: 1001,
  writable: true,
  configurable: false
});

Object.defineProperty(obj, "0", {
  value: 1002
});

verifyProperty(obj, "0", {
  value: 1002,
  writable: true,
  enumerable: false,
  configurable: false,
});
