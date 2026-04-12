

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-3-6
description: >
    Array.prototype.forEach - value of 'length' is a number (value is
    positive)
---*/

var testResult1 = false;

function callbackfn(val, idx, obj) {
  testResult1 = (val > 10);
}

var obj = {
  1: 11,
  2: 9,
  length: 2
};

Array.prototype.forEach.call(obj, callbackfn);

assert(testResult1, 'testResult1 !== true');
