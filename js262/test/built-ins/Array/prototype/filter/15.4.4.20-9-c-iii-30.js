

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - return value (new Boolean(false)) of
    callbackfn is treated as true value
---*/

function callbackfn(val, idx, obj) {
  return new Boolean(false);
}

var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
