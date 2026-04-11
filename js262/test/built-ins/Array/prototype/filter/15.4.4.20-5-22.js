

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - boolean primitive can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() === false;
}

var newArr = [11].filter(callbackfn, false);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
