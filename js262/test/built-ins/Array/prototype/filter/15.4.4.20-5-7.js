

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-5-7
description: Array.prototype.filter - built-in functions can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === eval;
}

var newArr = [11].filter(callbackfn, eval);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
