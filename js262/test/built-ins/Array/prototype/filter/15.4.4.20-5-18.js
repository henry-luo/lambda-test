

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - Error Object can be used as thisArg
---*/

var accessed = false;
var objError = new RangeError();

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objError;
}

var newArr = [11].filter(callbackfn, objError);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');
