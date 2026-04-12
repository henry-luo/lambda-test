

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - 'length' is a string containing a number
    with leading zeros
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return (curVal === 11 && idx === 1);
}

var obj = {
  1: 11,
  2: 9,
  length: "0002.00"
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 1), true, 'Array.prototype.reduce.call(obj, callbackfn, 1)');
