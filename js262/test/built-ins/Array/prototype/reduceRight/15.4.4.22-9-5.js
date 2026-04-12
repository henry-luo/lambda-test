

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - callbackfn not called for array with
    one element
---*/

var callCnt = 0;

function callbackfn(prevVal, curVal, idx, obj)
{
  callCnt++;
  return 2;
}

var arr = [1];

assert.sameValue(arr.reduceRight(callbackfn), 1, 'arr.reduceRight(callbackfn)');
assert.sameValue(callCnt, 0, 'callCnt');
