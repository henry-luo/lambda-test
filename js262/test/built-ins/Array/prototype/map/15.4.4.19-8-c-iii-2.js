

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of returned array element equals to
    'mappedValue'
---*/

function callbackfn(val, idx, obj) {
  return val;
}

var obj = {
  0: 11,
  1: 9,
  length: 2
};
var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr[0], obj[0], 'newArr[0]');
assert.sameValue(newArr[1], obj[1], 'newArr[1]');
