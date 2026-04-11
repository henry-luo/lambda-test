

/*---
es5id: 15.2.3.6-4-132
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', test RangeError exception is not thrown when the
    [[Value]] field of 'desc' is a positive number (15.4.5.1 step 3.c)
---*/

var arrObj = [];

Object.defineProperty(arrObj, "length", {
  value: 12
});

assert.sameValue(arrObj.length, 12, 'arrObj.length');
