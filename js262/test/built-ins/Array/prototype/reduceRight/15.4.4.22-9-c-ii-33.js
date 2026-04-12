

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight - the JSON can be used as accumulator
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

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, JSON), true, 'Array.prototype.reduceRight.call(obj, callbackfn, JSON)');
assert(accessed, 'accessed !== true');
