

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce reduces the array in ascending order of
    indices
---*/

function callbackfn(prevVal, curVal, idx, obj)
{
  return prevVal + curVal;
}
var srcArr = ['1', '2', '3', '4', '5'];

assert.sameValue(srcArr.reduce(callbackfn), '12345', 'srcArr.reduce(callbackfn)');
