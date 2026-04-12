

/*---
es5id: 15.2.3.7-6-a-264
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, test the length property of 'O' is set as
    ToUint32('P') + 1 if ToUint32('P') equals to value of the length
    property in 'O' (15.4.5.1 step 4.e.ii)
---*/

var arr = [];

arr.length = 3; 

Object.defineProperties(arr, {
  "3": {
    value: 26
  }
});

assert.sameValue(arr.length, 4, 'arr.length');
assert.sameValue(arr[3], 26, 'arr[3]');
