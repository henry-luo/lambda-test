

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - callbackfn is called with 3 formal
    parameter
---*/

function callbackfn(val, idx, obj) {
  return val > 10 && obj[idx] === val;
}
var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
