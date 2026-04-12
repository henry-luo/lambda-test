

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - number primitive can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() === 101;
}

var newArr = [11].filter(callbackfn, 101);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
