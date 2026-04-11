

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter return value of callbackfn is an empty
    string
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return "";
}

var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
assert(accessed, 'accessed !== true');
