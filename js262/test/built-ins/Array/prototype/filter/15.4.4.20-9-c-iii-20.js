

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - return value of callbackfn is a Number
    object
---*/

function callbackfn(val, idx, obj) {
  return new Number();
}

var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
