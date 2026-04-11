

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - This object is the Arguments object
    which implements its own property get method (number of arguments
    is greater than number of parameters)
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 2) {
    testResult = (prevVal === 3);
  }
}

var func = function(a, b, c) {
  Array.prototype.reduceRight.call(arguments, callbackfn);
};

func(0, 1, 2, 3);

assert(testResult, 'testResult !== true');
