

/*---
es5id: 15.2.3.6-4-266
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, name is accessor property and 'desc' is accessor
    descriptor, test setting the [[Get]] attribute value of 'name' as
    undefined (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [];

function getFunc() {
  return 12;
}

Object.defineProperty(arrObj, "0", {
  get: getFunc,
  configurable: true
});

Object.defineProperty(arrObj, "0", {
  get: undefined
});

verifyProperty(arrObj, "0", {
  enumerable: false,
  configurable: true,
});
