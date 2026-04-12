

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - value of 'length' is undefined
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var obj = {
  0: 0,
  1: 1,
  length: undefined
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
