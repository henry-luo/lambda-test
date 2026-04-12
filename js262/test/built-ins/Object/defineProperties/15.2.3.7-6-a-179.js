

/*---
es5id: 15.2.3.7-6-a-179
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' is boundary value 2^32 - 2 (15.4.5.1 step 4.a)
---*/

var arr = [];

Object.defineProperties(arr, {
  "4294967294": {
    value: 100
  }
});

assert(arr.hasOwnProperty("4294967294"), 'arr.hasOwnProperty("4294967294") !== true');
assert.sameValue(arr.length, 4294967295, 'arr.length');
assert.sameValue(arr[4294967294], 100, 'arr[4294967294]');
