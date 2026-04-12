

/*---
es5id: 15.2.3.6-4-269
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, name is accessor property and 'desc' is accessor
    descriptor, test setting the [[Set]] attribute value of 'name' as
    undefined (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [];

Object.defineProperty(arrObj, "0", {
  set: function() {},
  configurable: true
});

Object.defineProperty(arrObj, "0", {
  set: undefined
});

verifyProperty(arrObj, "0", {
  enumerable: false,
  configurable: true,
});
