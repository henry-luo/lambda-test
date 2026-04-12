

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-3-13
description: >
    Array.prototype.forEach - 'length' is a string containing a
    decimal number
---*/

var testResult = false;

function callbackfn(val, idx, obj) {
  testResult = (val > 10);
}
var obj = {
  1: 11,
  2: 9,
  length: "2.5"
};

Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
