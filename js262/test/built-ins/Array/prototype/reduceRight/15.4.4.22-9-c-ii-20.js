

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight - undefined can be used as accumulator
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return typeof prevVal === "undefined";
}

var obj = {
  0: 11,
  length: 1
};

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, undefined), true, 'Array.prototype.reduceRight.call(obj, callbackfn, undefined)');
assert(accessed, 'accessed !== true');
