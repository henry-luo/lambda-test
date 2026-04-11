

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - the Math object can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === Math;
}

var newArr = [11].filter(callbackfn, Math);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
