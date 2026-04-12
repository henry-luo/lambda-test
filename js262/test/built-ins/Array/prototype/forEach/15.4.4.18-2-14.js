

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach applied to the Array-like object that
    'length' property doesn't exist
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var obj = {
  0: 11,
  1: 12
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
