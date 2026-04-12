

/*---
es5id: 15.2.3.6-4-275
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, test the length property of 'O' is set as
    ToUint32('name') + 1 if ToUint32('name') equals to value of the
    length property in 'O' (15.4.5.1 step 4.e.ii)
---*/

var arrObj = [];
arrObj.length = 3; 

Object.defineProperty(arrObj, "3", {
  value: 3
});

assert.sameValue(arrObj.length, 4, 'arrObj.length');
assert.sameValue(arrObj[3], 3, 'arrObj[3]');
