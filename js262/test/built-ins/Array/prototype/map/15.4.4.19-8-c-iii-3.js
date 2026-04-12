

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of returned array element can be
    overwritten
---*/

function callbackfn(val, idx, obj) {
  return 11;
}

var obj = {
  0: 11,
  1: 9,
  length: 2
};
var newArr = Array.prototype.map.call(obj, callbackfn);

var tempVal = newArr[1];
newArr[1] += 1;

assert.notSameValue(newArr[1], tempVal, 'newArr[1]');
