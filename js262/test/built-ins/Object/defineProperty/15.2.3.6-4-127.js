

/*---
es5id: 15.2.3.6-4-127
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', test the [[Value]] field of 'desc' is a boolean
    with value false (15.4.5.1 step 3.c)
---*/

var arrObj = [0, 1];

Object.defineProperty(arrObj, "length", {
  value: false
});

assert.sameValue(arrObj.length, 0, 'arrObj.length');
assert.sameValue(arrObj.hasOwnProperty("0"), false, 'arrObj.hasOwnProperty("0")');
assert.sameValue(arrObj.hasOwnProperty("1"), false, 'arrObj.hasOwnProperty("1")');
