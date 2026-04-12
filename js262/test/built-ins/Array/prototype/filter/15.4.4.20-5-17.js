

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - the JSON object can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === JSON;
}

var newArr = [11].filter(callbackfn, JSON);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
