

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - RegExp object can be used as accumulator
---*/

var objRegExp = new RegExp();

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objRegExp;
}

var obj = {
  0: 11,
  length: 1
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, objRegExp), true, 'Array.prototype.reduce.call(obj, callbackfn, objRegExp)');
assert(accessed, 'accessed !== true');
