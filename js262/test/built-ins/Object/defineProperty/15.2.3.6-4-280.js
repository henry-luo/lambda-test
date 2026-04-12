

/*---
es5id: 15.2.3.6-4-280
description: >
    Object.defineProperty - 'O' is an Array, 'name' is generic own
    data property of 'O', and 'desc' is data descriptor, test updating
    multiple attribute values of 'name' (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

arrObj.property = 12; 

Object.defineProperty(arrObj, "property", {
  writable: false,
  enumerable: false,
  configurable: false
});

verifyProperty(arrObj, "property", {
  value: 12,
  writable: false,
  enumerable: false,
  configurable: false,
});
