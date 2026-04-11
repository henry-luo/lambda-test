

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter return value of callbackfn is a number
    (value is negative number)
---*/

function callbackfn(val, idx, obj) {
  return -5;
}

var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
