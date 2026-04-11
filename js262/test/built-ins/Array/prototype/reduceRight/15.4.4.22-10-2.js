

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight reduces array in descending order of
    indices
---*/

function callbackfn(prevVal, curVal, idx, obj)
{
  return prevVal + curVal;
}
var srcArr = ['1', '2', '3', '4', '5'];

assert.sameValue(srcArr.reduceRight(callbackfn), '54321', 'srcArr.reduceRight(callbackfn)');
