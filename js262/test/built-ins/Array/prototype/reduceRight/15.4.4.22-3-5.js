

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - value of 'length' is a number (value
    is -0)
---*/

var accessed = false;

function callbackfn(preVal, curVal, idx, obj) {
  accessed = true;
}

var obj = {
  0: 9,
  length: -0
};

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, 1), 1, 'Array.prototype.reduceRight.call(obj, callbackfn, 1)');
assert.sameValue(accessed, false, 'accessed');
