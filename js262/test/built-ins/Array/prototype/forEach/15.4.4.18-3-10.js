

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - value of 'length' is a number (value is
    NaN)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var obj = {
  0: 9,
  length: NaN
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
