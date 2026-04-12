

/*---
es5id: 15.2.3.7-6-a-206
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' makes no change if every field in 'desc' is
    absent (name is data property)  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

arr[0] = 101; 


Object.defineProperties(arr, {
  "0": {}
});

verifyProperty(arr, "0", {
  value: 101,
  writable: true,
  enumerable: true,
  configurable: true,
});
