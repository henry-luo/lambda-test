

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - element to be retrieved is inherited data
    property on an Array
---*/

function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === 13;
  }
  return false;
}

Array.prototype[1] = 13;

var newArr = [, , , ].map(callbackfn);

assert.sameValue(newArr[1], true, 'newArr[1]');
