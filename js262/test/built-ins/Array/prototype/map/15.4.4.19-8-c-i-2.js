

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - element to be retrieved is own data property
    on an Array
---*/

var kValue = {};

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}

var arr = [kValue];

var newArr = arr.map(callbackfn);

assert.sameValue(newArr[0], true, 'newArr[0]');
