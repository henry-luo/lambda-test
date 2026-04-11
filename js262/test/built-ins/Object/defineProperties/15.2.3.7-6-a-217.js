

/*---
es5id: 15.2.3.7-6-a-217
description: >
    Object.defineProperties - 'O' is an Array, 'name' is an array
    index property, the [[Value]] field of 'desc' and the [[Value]]
    attribute value of 'name' are two booleans with same value
    (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

Object.defineProperty(arr, "0", {
  value: true
});

Object.defineProperties(arr, {
  "0": {
    value: true
  }
});

verifyProperty(arr, "0", {
  value: true,
  writable: false,
  enumerable: false,
  configurable: false,
});
