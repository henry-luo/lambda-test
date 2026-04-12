

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - callbackfn not called for indexes never been
    assigned values
---*/

var callCnt = 0;

function callbackfn(val, idx, obj)
{
  callCnt++;
  return 1;
}

var srcArr = new Array(10);
srcArr[1] = undefined; 
var resArr = srcArr.map(callbackfn);

assert.sameValue(resArr.length, 10, 'resArr.length');
assert.sameValue(callCnt, 1, 'callCnt');
