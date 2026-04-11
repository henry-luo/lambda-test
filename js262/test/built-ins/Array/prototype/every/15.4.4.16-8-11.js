

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every returns true when all calls to callbackfn
    return true
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  callCnt++;
  return true;
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


assert.sameValue(arr.every(callbackfn), true, 'arr.every(callbackfn)');
assert.sameValue(callCnt, 10, 'callCnt');
