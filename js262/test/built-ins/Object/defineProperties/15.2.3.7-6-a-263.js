

/*---
es5id: 15.2.3.7-6-a-263
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, test the length property of 'O' is not changed if
    ToUint32('P') is less than value of the length property in 'O'
    (15.4.5.1 step 4.e)
---*/

var arr = [];

arr.length = 3; 

Object.defineProperties(arr, {
  "1": {
    value: 26
  }
});

assert.sameValue(arr.length, 3, 'arr.length');
assert.sameValue(arr[1], 26, 'arr[1]');
