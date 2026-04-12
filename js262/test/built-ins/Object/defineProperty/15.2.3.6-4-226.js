

/*---
es5id: 15.2.3.6-4-226
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Value]] field of 'desc' and the [[Value]]
    attribute value of 'name' are two objects which refer to the same
    object (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

var obj1 = {
  length: 10
};

Object.defineProperty(arrObj, "0", {
  value: obj1
});

Object.defineProperty(arrObj, "0", {
  value: obj1
});

verifyProperty(arrObj, "0", {
  value: obj1,
  writable: false,
  enumerable: false,
  configurable: false,
});

