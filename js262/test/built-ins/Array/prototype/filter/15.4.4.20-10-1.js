

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter doesn't mutate the Array on which it is
    called on
---*/

function callbackfn(val, idx, obj)
{
  return true;
}
var srcArr = [1, 2, 3, 4, 5];
srcArr.filter(callbackfn);

assert.sameValue(srcArr[0], 1, 'srcArr[0]');
assert.sameValue(srcArr[1], 2, 'srcArr[1]');
assert.sameValue(srcArr[2], 3, 'srcArr[2]');
assert.sameValue(srcArr[3], 4, 'srcArr[3]');
assert.sameValue(srcArr[4], 5, 'srcArr[4]');
