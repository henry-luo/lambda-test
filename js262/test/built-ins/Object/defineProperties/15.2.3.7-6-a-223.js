

/*---
es5id: 15.2.3.7-6-a-223
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    property that already exists on 'O' with  [[Enumerable]] true, the
    [[Enumerable]] field of 'desc' is true  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

Object.defineProperty(arr, "0", {
  enumerable: true
});

Object.defineProperties(arr, {
  "0": {
    enumerable: true
  }
});

verifyProperty(arr, "0", {
  value: undefined,
  writable: false,
  enumerable: true,
  configurable: false,
});
