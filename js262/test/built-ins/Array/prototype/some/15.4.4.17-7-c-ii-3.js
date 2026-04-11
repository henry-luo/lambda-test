

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some immediately returns true if callbackfn
    returns true
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  callCnt++;
  if (idx > 5)
    return true;
  else
    return false;
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


assert.sameValue(arr.some(callbackfn), true, 'arr.some(callbackfn)');
assert.sameValue(callCnt, 7, 'callCnt');
