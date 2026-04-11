

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - the Math object can be used as accumulator
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === Math;
}

var obj = {
  0: 11,
  length: 1
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, Math), true, 'Array.prototype.reduce.call(obj, callbackfn, Math)');
assert(accessed, 'accessed !== true');
