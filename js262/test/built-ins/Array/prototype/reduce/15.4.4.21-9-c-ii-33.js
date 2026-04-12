

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - the JSON can be used as accumulator
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === JSON;
}

var obj = {
  0: 11,
  length: 1
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, JSON), true, 'Array.prototype.reduce.call(obj, callbackfn, JSON)');
assert(accessed, 'accessed !== true');
