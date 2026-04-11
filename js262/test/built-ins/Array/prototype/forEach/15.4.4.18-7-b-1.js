

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - callbackfn not called for indexes never
    been assigned values
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  callCnt++;
}

var arr = new Array(10);
arr[1] = undefined;
arr.forEach(callbackfn);

assert.sameValue(callCnt, 1, 'callCnt');
