

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - 'accumulator' used for current
    iteration is the result of previous iteration on an Array
---*/

var arr = [11, 12, 13];
var testResult = true;
var initVal = 6.99;
var preResult = initVal;

function callbackfn(prevVal, curVal, idx, obj) {
  if (prevVal !== preResult) {
    testResult = false;
  }
  preResult = curVal;
  return curVal;
}

arr.reduceRight(callbackfn, initVal);

assert(testResult, 'testResult !== true');
