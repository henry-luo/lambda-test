

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - value of 'length' is a positive
    non-integer, ensure truncation occurs in the proper direction
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return (curVal === 11 && idx === 1);
}

var obj = {
  1: 11,
  2: 9,
  length: 2.685
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 1), true, 'Array.prototype.reduce.call(obj, callbackfn, 1)');
