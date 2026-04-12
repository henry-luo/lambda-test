

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - This object is the Arguments object
    which implements its own property get method (number of arguments
    is less than number of parameters)
---*/

var testResult = false;

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    testResult = (val === 11);
  }
}

var func = function(a, b) {
  return Array.prototype.forEach.call(arguments, callbackfn);
};

func(11);

assert(testResult, 'testResult !== true');
