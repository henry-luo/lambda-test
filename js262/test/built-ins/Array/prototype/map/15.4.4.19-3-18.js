

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of 'length' is a string that can't
    convert to a number
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var obj = {
  length: "asdf!_"
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
