

/*---
es5id: 15.2.3.6-4-242-1
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property,  'name' is data property and 'desc' is data
    descriptor, and the [[Configurable]] attribute value of 'name' is
    true, test 'name' is updated successfully (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [3];

Object.defineProperty(arrObj, "0", {
  value: 1001,
  writable: false,
  enumerable: false
});

verifyProperty(arrObj, "0", {
  value: 1001,
  writable: false,
  enumerable: false,
  configurable: true,
});
