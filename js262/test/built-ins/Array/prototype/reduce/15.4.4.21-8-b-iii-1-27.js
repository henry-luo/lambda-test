

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - This object is the Arguments object which
    implements its own property get method (number of arguments is
    greater than number of parameters)
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 3) {
    testResult = (prevVal === 2);
  }
}

var func = function(a, b, c) {
  delete arguments[0];
  delete arguments[1];
  Array.prototype.reduce.call(arguments, callbackfn);
};

func(0, 1, 2, 3);

assert(testResult, 'testResult !== true');
