

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - return value of callbackfn is undefined
---*/

var accessed = false;
var obj = {
  0: 11,
  length: 1
};

function callbackfn(val, idx, o) {
  accessed = true;
  return undefined;
}


assert.sameValue(Array.prototype.every.call(obj, callbackfn), false, 'Array.prototype.every.call(obj, callbackfn)');
assert(accessed, 'accessed !== true');
