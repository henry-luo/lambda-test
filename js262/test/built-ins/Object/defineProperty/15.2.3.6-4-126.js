

/*---
es5id: 15.2.3.6-4-126
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', test the [[Value]] field of 'desc' is null
    (15.4.5.1 step 3.c)
---*/

var arrObj = [0, 1];

Object.defineProperty(arrObj, "length", {
  value: null
});

assert.sameValue(arrObj.length, 0, 'arrObj.length');
