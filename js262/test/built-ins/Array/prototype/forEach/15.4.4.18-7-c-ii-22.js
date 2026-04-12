

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - callbackfn called with correct
    parameters (the index k is correct)
---*/

var resultOne = false;
var resultTwo = false;

function callbackfn(val, idx, obj) {
  if (val === 11) {
    resultOne = (idx === 0);
  }

  if (val === 12) {
    resultTwo = (idx === 1);
  }

}

var obj = {
  0: 11,
  1: 12,
  length: 2
};

Array.prototype.forEach.call(obj, callbackfn);

assert(resultOne, 'resultOne !== true');
assert(resultTwo, 'resultTwo !== true');
