

/*---
es5id: 15.2.3.7-6-a-208
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' makes no change if the value of every field in
    'desc' is the same value as the corresponding field in 'P'(desc is
    data property)  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

arr[0] = 100; 

Object.defineProperties(arr, {
  "0": {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

verifyProperty(arr, "0", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true,
});
  
