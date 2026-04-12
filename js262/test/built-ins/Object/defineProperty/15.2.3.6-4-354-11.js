

/*---
es5id: 15.2.3.6-4-354-11
description: >
    Object.defineProperty will update [[Value]] attribute of named
    property 'P' successfully when [[Configurable]] attribute is true
    and [[Writable]] attribute is false, 'A' is an Array object
    (8.12.9 step - Note)
includes: [propertyHelper.js]
---*/


var obj = [];

Object.defineProperty(obj, "prop", {
  value: 1001,
  writable: false,
  configurable: true
});

Object.defineProperty(obj, "prop", {
  value: 1002
});

verifyProperty(obj, "prop", {
  value: 1002,
  writable: false,
  enumerable: false,
  configurable: true,
});
