

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - value of 'length' is undefined
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var obj = {
  length: undefined
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
