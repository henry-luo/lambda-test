

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - no observable effects occur if len is 0
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var obj = {
  0: 11,
  1: 12,
  length: 0
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
