

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - callbackfn not called for indexes never
    been assigned values
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  callCnt++;
  return false;
}

var arr = new Array(10);
arr[1] = undefined;
arr.some(callbackfn);

assert.sameValue(callCnt, 1, 'callCnt');
