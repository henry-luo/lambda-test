

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - callbackfn not called for indexes never
    been assigned values
---*/

var callCnt = 0;

function callbackfn(prevVal, curVal, idx, obj)
{
  callCnt++;
  return curVal;
}

var arr = new Array(10);
arr[0] = arr[1] = undefined; 

assert.sameValue(arr.reduce(callbackfn), undefined, 'arr.reduce(callbackfn)');
assert.sameValue(callCnt, 1, 'callCnt');
