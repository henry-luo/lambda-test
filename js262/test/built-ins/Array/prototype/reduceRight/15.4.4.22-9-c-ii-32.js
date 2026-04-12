

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - RegExp Object can be used as
    accumulator
---*/

var accessed = false;
var objRegExp = new RegExp();

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objRegExp;
}

var obj = {
  0: 11,
  length: 1
};

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, objRegExp), true, 'Array.prototype.reduceRight.call(obj, callbackfn, objRegExp)');
assert(accessed, 'accessed !== true');
