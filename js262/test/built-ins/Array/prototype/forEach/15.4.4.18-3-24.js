

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-3-24
description: >
    Array.prototype.forEach - value of 'length' is a positive
    non-integer, ensure truncation occurs in the proper direction
---*/

var testResult = false;

function callbackfn(val, idx, obj) {
  testResult = (val > 10);
}

var obj = {
  1: 11,
  2: 9,
  length: 2.685
};

Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
