

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-3-25
description: >
    Array.prototype.forEach - value of 'length' is a negative
    non-integer
---*/

var testResult = false;

function callbackfn(val, idx, obj) {
  testResult = (val > 10);
}

var obj = {
  1: 11,
  2: 9,
  length: -4294967294.5
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(testResult, false, 'testResult');
