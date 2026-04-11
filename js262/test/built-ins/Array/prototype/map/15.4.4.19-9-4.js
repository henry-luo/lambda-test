

/*---
esid: sec-array.prototype.map
description: Array.prototype.map doesn't visit expandos
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  callCnt++;
}
var srcArr = [1, 2, 3, 4, 5];
srcArr["i"] = 10;
srcArr[true] = 11;

var resArr = srcArr.map(callbackfn);

assert.sameValue(callCnt, 5, 'callCnt');
