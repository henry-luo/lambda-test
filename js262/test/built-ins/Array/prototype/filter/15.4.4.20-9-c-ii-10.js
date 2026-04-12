

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - callbackfn is called with 1 formal
    parameter
---*/

function callbackfn(val) {
  return val > 10;
}
var newArr = [12].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 12, 'newArr[0]');
