

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - return value of callbackfn is a nunmber
    (value is -0)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return -0;
}

var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
assert(accessed, 'accessed !== true');
