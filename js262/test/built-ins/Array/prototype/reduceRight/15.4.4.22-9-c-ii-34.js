

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - Error Object can be used as
    accumulator
---*/

var accessed = false;
var objError = new RangeError();

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objError;
}

var obj = {
  0: 11,
  length: 1
};


assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, objError), true, 'Array.prototype.reduceRight.call(obj, callbackfn, objError)');
assert(accessed, 'accessed !== true');
