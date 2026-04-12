

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-3-4
description: >
    Array.prototype.forEach - value of 'length' is a number (value is
    +0)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var obj = {
  0: 11,
  length: +0
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
