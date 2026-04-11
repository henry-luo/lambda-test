

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach doesn't visit deleted elements in array
    after the call
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  if (callCnt == 0)
    delete arr[3];
  callCnt++;
}

var arr = [1, 2, 3, 4, 5];
arr.forEach(callbackfn)

assert.sameValue(callCnt, 4, 'callCnt');
