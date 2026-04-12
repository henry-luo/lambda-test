

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - Number Object can be used as thisArg
---*/

var accessed = false;
var objNumber = new Number();

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objNumber;
}

var newArr = [11].filter(callbackfn, objNumber);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
