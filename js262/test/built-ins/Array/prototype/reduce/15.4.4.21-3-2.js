

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - value of 'length' is a boolean (value is
    true)
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return (curVal === 11 && idx === 0);
}

var obj = {
  0: 11,
  1: 9,
  length: true
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 1), true, 'Array.prototype.reduce.call(obj, callbackfn, 1)');
