

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - callbackfn is called with 3 formal
    parameter
---*/

var testResult = false;
var arr = [11, 12, 13];
var initVal = 6.99;

function callbackfn(prevVal, curVal, idx) {
  if (idx === 2) {
    testResult = (prevVal === initVal);
  }
  return curVal > 10 && arguments[3][idx] === curVal;
}

assert.sameValue(arr.reduceRight(callbackfn, initVal), true, 'arr.reduceRight(callbackfn, initVal)');
assert(testResult, 'testResult !== true');
