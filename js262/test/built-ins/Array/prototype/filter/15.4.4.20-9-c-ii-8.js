

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - element changed by callbackfn on previous
    iterations is observed
---*/

var obj = {
  0: 11,
  1: 12,
  length: 2
};

function callbackfn(val, idx, o) {
  if (idx === 0) {
    obj[idx + 1] = 8;
  }
  return val > 10;
}

var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
